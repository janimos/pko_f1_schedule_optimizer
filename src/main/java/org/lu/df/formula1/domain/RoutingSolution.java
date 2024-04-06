package org.lu.df.formula1.domain;

import ai.timefold.solver.core.api.domain.solution.PlanningEntityCollectionProperty;
import ai.timefold.solver.core.api.domain.solution.PlanningScore;
import ai.timefold.solver.core.api.domain.solution.PlanningSolution;
import ai.timefold.solver.core.api.domain.solution.ProblemFactCollectionProperty;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeProvider;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.lu.df.formula1.Main;

import java.util.ArrayList;
import java.util.List;


@PlanningSolution
@Getter @Setter @NoArgsConstructor
public class RoutingSolution {
    private static final Logger LOGGER = LoggerFactory.getLogger(RoutingSolution.class);

    private String solutionId;
    @PlanningScore
    private HardSoftScore score;

    @PlanningEntityCollectionProperty
    private List<Stage> stageList = new ArrayList<>();

    @ProblemFactCollectionProperty
    @ValueRangeProvider
    private List<Schedule> scheduleList = new ArrayList<>();

    @ProblemFactCollectionProperty
    private List<Location> locationList = new ArrayList<>();

    public void printData(){
        this.getStageList().forEach(stage -> {
            LOGGER.info(stage.getName() + " at " + stage.getLocationName());
        });
    }
}
