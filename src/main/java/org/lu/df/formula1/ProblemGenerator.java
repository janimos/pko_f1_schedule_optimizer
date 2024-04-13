package org.lu.df.formula1;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.lu.df.formula1.domain.RoutingSolution;
import org.lu.df.formula1.domain.RoutingSolutionJsonIO;

import java.io.File;

public class ProblemGenerator {
    public static String generateProblem(String fileName) throws JsonProcessingException {

        String name = "problem_" + fileName;

        RoutingSolutionJsonIO routingSolutionJsonIO = new RoutingSolutionJsonIO();
        routingSolutionJsonIO.write(
                RoutingSolution.getDataFromJson("data/tests/" + fileName),
                new File("data/problems/" + name)
        );

        return name;
    }
}
