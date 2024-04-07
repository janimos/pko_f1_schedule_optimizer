package org.lu.df.formula1.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import ai.timefold.solver.core.api.score.stream.Joiners;
import org.lu.df.formula1.domain.Schedule;
import org.lu.df.formula1.domain.Stage;

public class StreamCalculator implements ConstraintProvider {
    @Override
    public Constraint[] defineConstraints(ConstraintFactory constraintFactory) {
        return new Constraint[] {
                totalCost(constraintFactory),
                totalIncome(constraintFactory),
                uniqueStagesInSchedule(constraintFactory),
                uniqueWeeksInSchedule(constraintFactory),
                weekDifferenceConstraint(constraintFactory),
        };
    }

    public Constraint totalCost(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Schedule.class)
                .filter(schedule -> schedule.getTotalCost() > 0)
                .penalize(HardSoftScore.ONE_SOFT, schedule -> (int) Math.round(schedule.getTotalCost()))
                .asConstraint("totalCost");
    }

    public Constraint totalIncome(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Schedule.class)
                .filter(schedule -> schedule.getTotalIncome() > schedule.getTotalCost())
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("totalIncome");
    }

    public Constraint uniqueStagesInSchedule(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEachUniquePair(Stage.class,
                        Joiners.equal(Stage::getSchedule),
                        Joiners.equal(Stage::getName))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("uniqueStages");
    }

    public Constraint uniqueWeeksInSchedule(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEachUniquePair(Stage.class,
                        Joiners.equal(Stage::getSchedule),
                        Joiners.equal(Stage::getWeek))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("uniqueWeeks");
    }

    public Constraint weekDifferenceConstraint(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEachUniquePair(
                        Stage.class,
                        Joiners.equal(Stage::getSchedule), // Only compare Stages within the same Schedule
                        Joiners.filtering((stage1, stage2) -> Math.abs(stage1.getWeek() - stage2.getWeek()) > 3)
                )
                .penalize(HardSoftScore.ONE_HARD,
                        (stage1, stage2) -> Math.abs(stage1.getWeek() - stage2.getWeek()) - 3)
                .asConstraint("weekDifference");
    }
}