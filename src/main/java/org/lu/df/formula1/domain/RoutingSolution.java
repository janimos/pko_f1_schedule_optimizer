package org.lu.df.formula1.domain;

import ai.timefold.solver.core.api.domain.valuerange.CountableValueRange;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeFactory;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.JsonNode;
import org.lu.df.formula1.utilities.Calculations;
import org.lu.df.formula1.utilities.GlobalConstants;
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

import java.util.*;
import java.sql.Timestamp;

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

    private int offWeekStart;
    private int offWeekEnd;

    @ValueRangeProvider(id = "weekRange")
    @JsonIgnore
    public CountableValueRange<Integer> getWeekRange() {
        // Dynamically generate the range based on startWeek and endWeek
        return ValueRangeFactory.createIntValueRange(this.startWeek, this.endWeek);
    }

    public void printData(){
        this.getStageList().forEach(stage -> {
            LOGGER.info(stage.getName() + " at " + stage.getLocation().getAddress());
            LOGGER.info("[ Planned week: " + (stage.getWeek()/* + GlobalConstants.weekCounter*/) + " ]\t[ Planned income: " + Calculations.getStageIncome(stage) + " ]\n");
        });

        Double income = 0.0;
        for (Stage stage: this.getStageList()) {
            income += Calculations.getStageIncome(stage);
        }
        LOGGER.info("Planned total income: " + income);
    }

    public static RoutingSolution getDataFromJson(String filePath) throws JsonProcessingException {
        String jsonContent = JsonUtilities.readJsonFile(filePath);
        ObjectMapper mapper = new ObjectMapper();

        // Parse the whole JSON as a JsonNode or a Map
        JsonNode rootNode = mapper.readTree(jsonContent);

        GlobalConstants.setStartEndWeek(
                rootNode.get("startWeek").asInt(),
                rootNode.get("endWeek").asInt()
        );

        GlobalConstants.setOffWeeks(
                rootNode.get("offWeekStart").asInt(),
                rootNode.get("offWeekEnd").asInt()
        );

        GlobalConstants.setStageCount(rootNode.get("stageCount").asInt());

        // Extract the stages part of the JSON and convert it into a List<Stage>
        JsonNode stagesNode = rootNode.get("stages");
        List<Stage> stages = mapper.convertValue(stagesNode, new TypeReference<List<Stage>>() {});;
        List<Location> locations = stages.stream().map(Stage::getLocation).distinct().toList();

        GlobalConstants.setStageCount(stages.size());

        // Assuming the stages are already sorted by week in the JSON file.
        // If not, you should sort them here based on the week field.
        for (int i = 0; i < stages.size(); i++) {
            Stage currentStage = stages.get(i);

            // Set the previous stage unless it's the first stage
            if (i > 0) {
                currentStage.setPrevious(stages.get(i - 1));
            }

            // Set the next stage unless it's the last stage
            if (i < stages.size() - 1) {
                currentStage.setNext(stages.get(i + 1));
            }
        }

        RoutingSolution problem = new RoutingSolution();

        problem.setStartWeek(GlobalConstants.getStartWeek());
        problem.setEndWeek(GlobalConstants.getEndWeek());

        problem.setOffWeekStart(GlobalConstants.getOffWeekStart());
        problem.setOffWeekEnd(GlobalConstants.getOffWeekEnd());

        Random randomizer = new Random();

        problem.setSolutionId(String.valueOf(randomizer.nextInt(0, 100)));
        problem.getStageList().addAll(stages);
        problem.getLocationList().addAll(locations);

        problem.reorderSchedule();

        return problem;
    }

    public void reorderSchedule() {
        Collections.sort(this.getStageList(), new Comparator<Stage>() {
            @Override
            public int compare(Stage o1, Stage o2) {
                return o1.getWeek().compareTo(o2.getWeek());
            }
        });
    }
}
