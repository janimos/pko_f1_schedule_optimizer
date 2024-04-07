package org.lu.df.formula1.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import ai.timefold.solver.core.api.score.stream.Joiners;
import org.lu.df.formula1.domain.RoutingSolution;
import org.lu.df.formula1.domain.Stage;

public class StreamCalculator implements ConstraintProvider {
    @Override
    public Constraint[] defineConstraints(ConstraintFactory constraintFactory) {
        return new Constraint[] {
                totalCost(constraintFactory),
                totalIncome(constraintFactory),
                uniqueWeeks(constraintFactory),
                weekDifferenceConstraint(constraintFactory),
        };
    }

    public Constraint totalCost(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Stage.class)
                .filter(stage -> stage.getNext() != null)
                .penalize(HardSoftScore.ONE_SOFT,
                        stage -> (int) Math.round(stage.getLocation().distanceTo(stage.getNext().getLocation()))
                )
                .asConstraint("totalCost");
    }

    public Constraint totalIncome(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(RoutingSolution.class)
                .filter(schedule -> schedule.getTotalIncome() > schedule.getTotalCost())
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("totalIncome");
    }

    public Constraint uniqueWeeks(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEachUniquePair(Stage.class,
                        Joiners.equal(Stage::getWeek))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("uniqueWeeks");
    }

    public Constraint weekDifferenceConstraint(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEachUniquePair(
                        Stage.class,
                        Joiners.filtering((stage1, stage2) ->
                                Math.abs(stage1.getWeek() - stage2.getWeek()) < 1 ||
                                Math.abs(stage1.getWeek() - stage2.getWeek()) > 3
                        )
                )
                .penalize(HardSoftScore.ONE_HARD,
                        (stage1, stage2) -> Math.abs(stage1.getWeek() - stage2.getWeek()) < 1 ? 1: 3)
                .asConstraint("weekDifference");
    }
}