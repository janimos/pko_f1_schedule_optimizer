package org.lu.df.formula1.domain;

import ai.timefold.solver.jackson.impl.domain.solution.JacksonSolutionFileIO;

public class RoutingSolutionJsonIO extends JacksonSolutionFileIO<RoutingSolution> {
    public RoutingSolutionJsonIO() {
        super(RoutingSolution.class);
    }
}
