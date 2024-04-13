package org.lu.df.formula1;

import ai.timefold.solver.benchmark.api.PlannerBenchmark;
import ai.timefold.solver.benchmark.api.PlannerBenchmarkFactory;
import com.fasterxml.jackson.core.JsonProcessingException;

public class BenchmarkRunner {
    public static void main(String[] args) throws JsonProcessingException {
        PlannerBenchmarkFactory benchmarkFactory = PlannerBenchmarkFactory
                .createFromSolverConfigXmlResource("SolverConfig.xml");

        PlannerBenchmarkFactory benchmarkFactoryFromXML = PlannerBenchmarkFactory
                .createFromXmlResource("BenchmarkConfig.xml");

        PlannerBenchmark benchmark = benchmarkFactoryFromXML.buildPlannerBenchmark();

        benchmark.benchmarkAndShowReportInBrowser();

    }
}
