package org.lu.df.formula1;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.lu.df.formula1.domain.RoutingSolution;
import org.lu.df.formula1.domain.RoutingSolutionJsonIO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Main {
    private static final Logger LOGGER = LoggerFactory.getLogger(Main.class);
    public static void main(String[] args) throws JsonProcessingException {

        LOGGER.info("Start!");

        String testFilePath = "data/simple_test_1.json";
        RoutingSolution problem = RoutingSolution.getDataFromJson(testFilePath);

        LOGGER.info("End!");
    }
}