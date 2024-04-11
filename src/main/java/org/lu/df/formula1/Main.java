package org.lu.df.formula1;

import ai.timefold.solver.core.api.score.ScoreExplanation;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.solver.SolutionManager;
import ai.timefold.solver.core.api.solver.Solver;
import ai.timefold.solver.core.api.solver.SolverFactory;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.lu.df.formula1.domain.RoutingSolution;
import org.lu.df.formula1.utilities.GlobalConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Main {
    private static final Logger LOGGER = LoggerFactory.getLogger(Main.class);
    public static void main(String[] args) throws JsonProcessingException {

        LOGGER.info("Start!");

        String testFilePath = "data/test_data_3.json";
        RoutingSolution problem = RoutingSolution.getDataFromJson(testFilePath);

        GlobalConstants.setStartEndWeek(0, 40);

        problem.printData();

        SolverFactory<RoutingSolution> solverFactory = SolverFactory.createFromXmlResource("SolverConfig.xml");

        Solver<RoutingSolution> solver = solverFactory.buildSolver();
        RoutingSolution solution = solver.solve(problem);

        SolutionManager<RoutingSolution, HardSoftScore> solutionManager = SolutionManager.create((solverFactory));
        ScoreExplanation<RoutingSolution, HardSoftScore> scoreExplanation = solutionManager.explain(solution);

        LOGGER.info(scoreExplanation.getSummary());

        solution.reorderSchedule();
        solution.printData();

        LOGGER.info(scoreExplanation.getScore().toString());

        LOGGER.info("End!");
    }
}