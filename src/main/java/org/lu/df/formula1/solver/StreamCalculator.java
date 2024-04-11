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
                uniqueWeeksConstraint(constraintFactory),

                costIncomeDifferenceConstraint(constraintFactory),
                weekDifferenceConstraint(constraintFactory),
                stageSequenceConstraint(constraintFactory),
                maxThreeStagesInARow(constraintFactory),
                minimizeTravelDistance(constraintFactory),
                minimizeTravelEmissions(constraintFactory),
                maximizeAttendanceAndIncome(constraintFactory),
                balancedDistribution(constraintFactory),
        };
    }

    public Constraint uniqueWeeksConstraint(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEachUniquePair(Stage.class,
                        Joiners.equal(Stage::getWeek))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("uniqueWeeksConstraint");
    }

    public Constraint costIncomeDifferenceConstraint(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Stage.class)
                .impact(HardSoftScore.ONE_SOFT, stage -> {
                    Double stageIncome = Calculations.getStageIncome(stage);
                    Double stageCost = Calculations.getTravelCost(Calculations.getStageTravelDistance(stage));

                    return (int) Math.round(stageIncome - stageCost);
                })
                .asConstraint("costIncomeDifferenceConstraint");
    }

    public Constraint weekDifferenceConstraint(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEachUniquePair(
                        Stage.class,
                        Joiners.filtering((stage1, stage2) ->
                                Math.abs(stage1.getWeek() - stage2.getWeek()) > 3
                        )
                )
                .penalize(HardSoftScore.ONE_SOFT,
                        (stage1, stage2) -> {
                            // Calculate the difference exceeding 3 weeks
                            int weekDifference = Math.abs(stage1.getWeek() - stage2.getWeek()) - 3;
                            // Apply a penalty for the excessive gap, you can adjust the factor based on how severe you want the penalty to be
                            return weekDifference * GlobalConstants.penaltyFactor;
                        })
                .asConstraint("weekDifferenceConstraint");
    }

    public Constraint stageSequenceConstraint(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Stage.class)
                .filter(stage -> stage.getNext() != null && stage.getWeek() >= stage.getNext().getWeek())
                .penalize(HardSoftScore.ONE_HARD) // Penalize if a stage is scheduled in the same week or after its "next" stage
                .asConstraint("stageSequenceConstraint");
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
                .penalize(HardSoftScore.ONE_SOFT, stage -> GlobalConstants.getStageCount() * GlobalConstants.penaltyFactor)
                .asConstraint("maxThreeStagesInARow");
    }

    public Constraint minimizeTravelDistance(ConstraintFactory constraintFactory) {
        return constraintFactory.forEach(Stage.class)
                .filter(stage -> stage.getPrevious() == null)  // Filter to find the starting stage of each sequence
                .penalize(HardSoftScore.ONE_SOFT,
                        stage -> (int) Math.round(Calculations.getTotalTravelDistance(stage)))
                .asConstraint("Minimize Travel Distance");
    }

    public Constraint minimizeTravelEmissions(ConstraintFactory constraintFactory) {
        return constraintFactory.forEach(Stage.class)
                .filter(stage -> stage.getPrevious() == null)
                .penalize(HardSoftScore.ONE_SOFT,
                        stage -> (int) Math.round(
                                Calculations.getTotalTravelDistance(stage) *
                                GlobalConstants.emissionsPricePerKilometer() *
                                GlobalConstants.estimatedEmployeeAmount
                        )
                ).asConstraint("Minimize Travel Emissions");
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
                .penalize(HardSoftScore.ONE_SOFT, stage -> {
                    int idealInterval = Math.round((float) (GlobalConstants.getEndWeek() - GlobalConstants.getStartWeek()) / GlobalConstants.getStageCount());
                    int actualInterval = stage.getNext().getWeek() - stage.getWeek();
                    // Penalize based on the difference from the ideal interval
                    return Math.abs(idealInterval - actualInterval) * GlobalConstants.penaltyFactor;
                }).asConstraint("Balanced Distribution");
    }
}