package org.lu.df.formula1.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import ai.timefold.solver.core.api.score.stream.Joiners;
import org.lu.df.formula1.domain.Stage;
import org.lu.df.formula1.utilities.Calculations;
import org.lu.df.formula1.utilities.GlobalConstants;

public class StreamCalculator implements ConstraintProvider {
    @Override
    public Constraint[] defineConstraints(ConstraintFactory constraintFactory) {
        return new Constraint[] {
                // Hard scores
                uniqueWeeksConstraint(constraintFactory),
                maxThreeStagesInARow(constraintFactory),
                noStagesDuringOffWeeks(constraintFactory),

                // Soft scores
                weekDifferenceConstraint(constraintFactory),
                minimizeTravelCosts(constraintFactory),
                maximizeAttendanceAndIncome(constraintFactory),
                balancedDistribution(constraintFactory),
        };
    }

    public Constraint uniqueWeeksConstraint(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEachUniquePair(Stage.class,
                        Joiners.equal(Stage::getWeek))
                .penalize(HardSoftScore.ofHard(GlobalConstants.penaltyFactor))
                .asConstraint("Grand Prix on unique week");
    }

    public Constraint maxThreeStagesInARow(ConstraintFactory constraintFactory) {
        return constraintFactory.forEach(Stage.class)
                .filter(stage -> {
                    int count = 1;  // Start with the current stage
                    Stage nextStage = stage.getNext();
                    while (nextStage != null && nextStage.getWeek() == stage.getWeek() + count) {
                        count++;
                        if (count > 3) {
                            return true;  // More than three stages in a row found
                        }
                        nextStage = nextStage.getNext();
                    }
                    return false;  // Less than or equal to three stages in a row
                })
                .penalize(HardSoftScore.ONE_HARD, stage -> GlobalConstants.penaltyFactor * 3)
                .asConstraint("Not more that 3 consecutive stages");
    }

    public Constraint noStagesDuringOffWeeks(ConstraintFactory constraintFactory) {
        // Check if the week of the stage falls within the off weeks range
        return constraintFactory.forEach(Stage.class)
                .filter(Calculations::isStageAtOffWeek)
                .penalize(HardSoftScore.ONE_HARD, stage -> GlobalConstants.penaltyFactor * 4)
                .asConstraint("No Stages During Off Weeks");
    }

    public Constraint weekDifferenceConstraint(ConstraintFactory constraintFactory) {
        return constraintFactory.forEach(Stage.class)
                .filter(stage -> stage.getNext() != null)
                .filter(stage -> Math.abs(stage.getNext().getWeek() - stage.getWeek()) > 3)
                .penalize(HardSoftScore.ONE_SOFT, stage -> {
                    // Calculate the difference exceeding 3 weeks
                    int weekDifference = Math.abs(stage.getNext().getWeek() - stage.getWeek());
                    // Apply a penalty for the excessive gap, you can adjust the factor based on how severe you want the penalty to be
                    return weekDifference * GlobalConstants.penaltyFactor;
                })
                .asConstraint("Week gap more that 3 weeks between two Grand Prix");
    }

    public Constraint minimizeTravelCosts(ConstraintFactory constraintFactory) {
        return constraintFactory.forEach(Stage.class)
                .penalize(HardSoftScore.ONE_SOFT, stage -> (int) Math.round(
                        Calculations.getStageTravelDistance(stage) *
                        (GlobalConstants.pricePerKilometer + GlobalConstants.emissionsPricePerKilometer() + Calculations.getCargoCost()) *
                        GlobalConstants.estimatedEmployeeAmount / GlobalConstants.priceDelimiter
                )).asConstraint("Minimize Travel Costs");
    }

    public Constraint maximizeAttendanceAndIncome(ConstraintFactory constraintFactory) {
        return constraintFactory.forEach(Stage.class)
                .reward(HardSoftScore.ONE_SOFT,
                        stage -> (int) Math.round(Calculations.getStageIncome(stage)))
                .asConstraint("Maximize Attendance and Income");
    }

    public Constraint balancedDistribution(ConstraintFactory constraintFactory) {
        return constraintFactory.forEach(Stage.class)
                .filter(stage -> stage.getNext() != null)  // Only consider stages with a subsequent stage
                .filter(stage -> {  // Add a filter to check the difference from the ideal interval exceeds a threshold before penalizing
                    int idealInterval = Math.round((float) (GlobalConstants.getEndWeek() - GlobalConstants.getStartWeek()) / GlobalConstants.getStageCount());
                    int actualInterval = stage.getNext().getWeek() - stage.getWeek();
                    // Check if the absolute difference from the ideal interval is significant enough to apply a penalty
                    return Math.abs(idealInterval - actualInterval) > GlobalConstants.toleranceThreshold;
                })
                .penalize(HardSoftScore.ONE_SOFT, stage -> {
                    int idealInterval = Math.round((float) (GlobalConstants.getEndWeek() - GlobalConstants.getStartWeek()) / GlobalConstants.getStageCount());
                    int actualInterval = stage.getNext().getWeek() - stage.getWeek();
                    // Penalize based on the difference from the ideal interval
                    return Math.abs(idealInterval - actualInterval) * GlobalConstants.penaltyFactor;
                }).asConstraint("Balanced Distribution");
    }
}