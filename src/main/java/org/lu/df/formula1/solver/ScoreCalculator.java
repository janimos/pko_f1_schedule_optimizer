package org.lu.df.formula1.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.calculator.EasyScoreCalculator;

import org.lu.df.formula1.domain.Location;
import org.lu.df.formula1.domain.Stage;
import org.lu.df.formula1.domain.Schedule;
import org.lu.df.formula1.domain.RoutingSolution;

public class ScoreCalculator implements EasyScoreCalculator<RoutingSolution, HardSoftScore> {
    @Override
    public HardSoftScore calculateScore(RoutingSolution routingSolution){
        int hard = 0;
        int soft = 0;

        Double totalDistance = 0.0;

        return HardSoftScore.of(- hard, -soft);
    }
}
