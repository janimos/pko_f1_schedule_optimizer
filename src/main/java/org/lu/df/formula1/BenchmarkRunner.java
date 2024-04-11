package org.lu.df.formula1;

import ai.timefold.solver.benchmark.api.PlannerBenchmark;
import ai.timefold.solver.benchmark.api.PlannerBenchmarkFactory;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.lu.df.formula1.domain.RoutingSolution;
import org.lu.df.formula1.domain.RoutingSolutionJsonIO;

import java.io.File;

public class BenchmarkRunner {
    public static void main(String[] args) throws JsonProcessingException {
        PlannerBenchmarkFactory benchmarkFactory = PlannerBenchmarkFactory
                .createFromSolverConfigXmlResource("SolverConfig.xml");

        PlannerBenchmarkFactory benchmarkFactoryFromXML = PlannerBenchmarkFactory
                .createFromXmlResource("BenchmarkConfig.xml");

        /*String name = "5_5.json";

        RoutingSolutionJsonIO routingSolutionJsonIO = new RoutingSolutionJsonIO();
        routingSolutionJsonIO.write(
                RoutingSolution.getDataFromJson("data/tests/test_" + name),
                new File("data/problems/problem_" + name));*/

        PlannerBenchmark benchmark = benchmarkFactoryFromXML.buildPlannerBenchmark();

        benchmark.benchmarkAndShowReportInBrowser();

    }
}
