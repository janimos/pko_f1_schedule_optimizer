package org.lu.df.formula1.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import org.lu.df.formula1.domain.Stage;
import org.lu.df.formula1.domain.Schedule;

public class StreamCalculator implements ConstraintProvider {
    @Override
    public Constraint[] defineConstraints(ConstraintFactory constraintFactory) {
        return new Constraint[] {
                totalDistance(constraintFactory)
        };
    }

    /*public Constraint everyVisit(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Stage.class)
                .penalize(HardSoftScore.ONE_SOFT, stage -> 1)
                .asConstraint("everyVisit");
    }*/

    public Constraint totalDistance(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(Schedule.class)
                .filter(schedule -> schedule.getTotalCost() > 0)
                .penalize(HardSoftScore.ONE_SOFT, schedule -> (int) Math.round(schedule.getTotalCost()))
                .asConstraint("totalCost");
    }
}