package org.lu.df.formula1.rest;

import ai.timefold.solver.core.api.score.analysis.ScoreAnalysis;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.constraint.Indictment;
import ai.timefold.solver.core.api.solver.SolutionManager;
import ai.timefold.solver.core.api.solver.SolverJob;
import ai.timefold.solver.core.api.solver.SolverManager;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.json.JSONObject;
import org.lu.df.formula1.ProblemGenerator;
import org.lu.df.formula1.domain.RoutingSolution;
import org.lu.df.formula1.domain.Stage;
import org.lu.df.formula1.solver.SimpleIndictmentObject;
import org.lu.df.formula1.utilities.Calculations;
import org.lu.df.formula1.utilities.GlobalConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Distance;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

import static org.lu.df.formula1.ProblemGenerator.generateProblem;

@RestController
@RequestMapping("/schedules")
public class RoutingController {

    @Autowired
    private SolverManager<RoutingSolution, String> solverManager;

    @Autowired
    private SolutionManager<RoutingSolution, HardSoftScore> solutionManager;

    private Map<String, RoutingSolution> solutionMap = new HashMap<>();

    private void initConstants(RoutingSolution problem) {
        GlobalConstants.setStartEndWeek(problem.getStartWeek(), problem.getEndWeek());
        GlobalConstants.setOffWeeks(problem.getOffWeekStart(), problem.getOffWeekEnd());
        GlobalConstants.setStageCount(problem.getStageList().size());
    }

    @PostMapping("/solve")
    public void solve(@RequestBody RoutingSolution problem) {
        initConstants(problem);
        SolverJob<RoutingSolution, String> solverJob = solverManager.solve(problem.getSolutionId(),problem);

        try {
            RoutingSolution solution = solverJob.getFinalBestSolution();
            // Wait until the solving ends
            solutionMap.put(solution.getSolutionId(), solution);
        } catch (InterruptedException | ExecutionException e) {
            throw new IllegalStateException("Solving failed.", e);
        }
    }

    @GetMapping("/solution")
    public RoutingSolution solution(@RequestParam("id") String id) {
        RoutingSolution solution = solutionMap.get(id);
        solution.reorderSchedule();
        return solution;
    }

    @GetMapping("/list")
    public List<RoutingSolution> list(){
        return solutionMap.values().stream().toList();
    }

    @GetMapping("/score")
    public ScoreAnalysis<HardSoftScore> score(@RequestParam("id") String id) {
        return solutionManager.analyze(solutionMap.get(id));
    }

    @GetMapping("/indictments")
    public List<SimpleIndictmentObject> indictments(@RequestParam("id") String id) {
        return solutionManager.explain(solutionMap.getOrDefault(id, null))
                .getIndictmentMap().entrySet().stream().map(
                        entry -> {
                            Indictment<HardSoftScore> indictment = entry.getValue();
                            return new SimpleIndictmentObject(
                                    entry.getKey(),
                                    indictment.getScore(),
                                    indictment.getConstraintMatchCount(),
                                    indictment.getConstraintMatchSet()
                            );
                        }
                ).collect(Collectors.toList());
    }

    @GetMapping("/createProblem")
    public String createProblem(@RequestParam("fileName") String fileName) throws JsonProcessingException {
        return ProblemGenerator.generateProblem(fileName);
    }

    @GetMapping("/solutionData")
    public Map<String, Object> solutionData(@RequestParam("id") String id) {
        RoutingSolution solution = solutionMap.get(id);
        JSONObject content = new JSONObject();

        Double income = 0.0;
        Double costs = 0.0;
        Double distance = 0.0;
        Double emissions = 0.0;

        for (Stage stage : solution.getStageList()) {
            income += Calculations.getStageIncome(stage);
        }
        for (Stage stage : solution.getStageList()) {
            distance += Calculations.getStageTravelDistance(stage);
            costs += Calculations.getTravelCost(distance);
        }

        emissions += distance * GlobalConstants.emissionsKgPerKilometer;

        content.put("income", Math.round(income * 100.0) / 100.0);
        content.put("costs", Math.round(costs * 100.0) / 100.0);
        content.put("totalIncome", Math.round((income - costs) * 100.0) / 100.0);
        content.put("distance", Math.round(distance * 100.0) / 100.0);
        content.put("emissions", Math.round(emissions * 100.0) / 100.0);

        return content.toMap();
    }
}
