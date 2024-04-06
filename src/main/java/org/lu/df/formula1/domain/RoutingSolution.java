package org.lu.df.formula1.domain;

import org.lu.df.formula1.utilities.JsonUtilities;

import ai.timefold.solver.core.api.domain.solution.PlanningEntityCollectionProperty;
import ai.timefold.solver.core.api.domain.solution.PlanningScore;
import ai.timefold.solver.core.api.domain.solution.PlanningSolution;
import ai.timefold.solver.core.api.domain.solution.ProblemFactCollectionProperty;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeProvider;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

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
            LOGGER.info(stage.getName() + " at " + stage.getLocation().getAddress());
        });
    }

    public static RoutingSolution getDataFromJson(String filePath) throws JsonProcessingException {
        String jsonContent = JsonUtilities.readJsonFile(filePath);
        ObjectMapper mapper = new ObjectMapper();

        List<Stage> stages = mapper.readValue(jsonContent, new TypeReference<List<Stage>>() {});

        RoutingSolution problem = new RoutingSolution();
        problem.getStageList().addAll(stages);

        return problem;
    }
}
