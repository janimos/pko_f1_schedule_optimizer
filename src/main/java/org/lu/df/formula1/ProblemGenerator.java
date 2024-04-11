package org.lu.df.formula1;

import ai.timefold.solver.benchmark.api.PlannerBenchmark;
import ai.timefold.solver.benchmark.api.PlannerBenchmarkFactory;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.lu.df.formula1.domain.RoutingSolution;
import org.lu.df.formula1.domain.RoutingSolutionJsonIO;

import java.io.File;

public class ProblemGenerator {
    public static void main(String[] args) throws JsonProcessingException {

        String name = "2023_full.json";

        RoutingSolutionJsonIO routingSolutionJsonIO = new RoutingSolutionJsonIO();
        routingSolutionJsonIO.write(
                RoutingSolution.getDataFromJson("data/tests/test_" + name),
                new File("data/problems/problem_" + name));
    }
}
