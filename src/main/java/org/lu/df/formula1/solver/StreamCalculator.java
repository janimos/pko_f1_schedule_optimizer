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
                    Double stageCost = Calculations.getTravelCost(stage);

                    return (int) Math.round((stageIncome - stageCost) / stage.getAttendance().get(stage.getWeek()));
                })
                .asConstraint("costIncomeDifferenceConstraint");
    }

    public Constraint uniqueWeeksConstraint(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEachUniquePair(Stage.class,
                        Joiners.equal(Stage::getWeek))
                .penalize(HardSoftScore.ofHard(500))
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
                        (stage1, stage2) -> {
                            Double lostIncome = 0.0;
                            if (stage1.getAttendance().get(stage1.getWeek()) > stage2.getAttendance().get(stage2.getWeek())) {
                                lostIncome = Calculations.getStageIncome(stage1);
                            } else {
                                lostIncome = Calculations.getStageIncome(stage2);
                            }
                            return (int) Math.abs(lostIncome);
                        })
                .asConstraint("weekDifferenceConstraint");
    }

    public Constraint stageSequenceConstraint(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Stage.class)
                .filter(stage -> stage.getNext() != null && stage.getWeek() >= stage.getNext().getWeek())
                .penalize(HardSoftScore.ONE_HARD, stage -> (int) Math.round((stage.getAttendance().get(stage.getWeek()) * GlobalConstants.averagePrice) / GlobalConstants.priceDelimiter)) // Penalize if a stage is scheduled in the same week or after its "next" stage
                .asConstraint("stageSequenceConstraint");
    }
}