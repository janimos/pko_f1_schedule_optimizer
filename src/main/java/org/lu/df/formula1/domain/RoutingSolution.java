package org.lu.df.formula1.domain;

import ai.timefold.solver.core.api.domain.valuerange.CountableValueRange;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeFactory;
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
import java.util.stream.Collectors;

@PlanningSolution
@Getter @Setter @NoArgsConstructor
public class RoutingSolution {
    private static final Logger LOGGER = LoggerFactory.getLogger(RoutingSolution.class);

    private String solutionId;

    @PlanningScore
    private HardSoftScore score;

    @ProblemFactCollectionProperty
    private List<Location> locationList = new ArrayList<>();

    @PlanningEntityCollectionProperty
    @ValueRangeProvider
    private List<Stage> stageList = new ArrayList<>();

    private int startWeek;

    private int endWeek;

    @ValueRangeProvider(id = "weekRange")
    public CountableValueRange<Integer> getWeekRange() {
        // Example: If weeks range from 1 to 52
        return ValueRangeFactory.createIntValueRange(this.startWeek, this.endWeek);
    }

    public void printData(){
        this.getStageList().forEach(stage -> {
            LOGGER.info(stage.getName() + " at " + stage.getLocation().getAddress());
            LOGGER.info("[ Planned week: " + stage.getWeek() + " ]");
        });
    }

    public static RoutingSolution getDataFromJson(String filePath) throws JsonProcessingException {
        String jsonContent = JsonUtilities.readJsonFile(filePath);
        ObjectMapper mapper = new ObjectMapper();

        List<Stage> stages = mapper.readValue(jsonContent, new TypeReference<List<Stage>>() {});
        List<Location> locations = stages.stream().map(Stage::getLocation).distinct().toList();

        RoutingSolution problem = new RoutingSolution();
        problem.setSolutionId("P1");
        problem.getStageList().addAll(stages);
        problem.getLocationList().addAll(locations);

        return problem;
    }

}
