package org.lu.df.formula1.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import ai.timefold.solver.core.api.score.stream.Joiners;
import org.lu.df.formula1.domain.RoutingSolution;
import org.lu.df.formula1.domain.Stage;
import org.lu.df.formula1.utilities.Calculations;

public class StreamCalculator implements ConstraintProvider {
    @Override
    public Constraint[] defineConstraints(ConstraintFactory constraintFactory) {
        return new Constraint[] {
                costIncomeDifferenceConstraint(constraintFactory),
                uniqueWeeksConstraint(constraintFactory),
                weekDifferenceConstraint(constraintFactory),
                stageSequenceConstraint(constraintFactory),
        };
    }

    public Constraint costIncomeDifferenceConstraint(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Stage.class)
                .impact(HardSoftScore.ONE_HARD, stage -> {
                    Double stageIncome = Calculations.getStageIncome(stage);
                    Double stageCost = Calculations.getStageCost(stage);

                    return (int) Math.round(stageIncome - stageCost);
                })
                .asConstraint("costIncomeDifferenceConstraint");
    }

    public Constraint uniqueWeeksConstraint(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEachUniquePair(Stage.class,
                        Joiners.equal(Stage::getWeek))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("uniqueWeeksConstraint");
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
                .asConstraint("weekDifferenceConstraint");
    }

    public Constraint stageSequenceConstraint(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Stage.class)
                .filter(stage -> stage.getNext() != null && stage.getWeek() >= stage.getNext().getWeek())
                .penalize(HardSoftScore.ONE_HARD, stage -> 1) // Penalize if a stage is scheduled in the same week or after its "next" stage
                .asConstraint("stageSequenceConstraint");
    }
}