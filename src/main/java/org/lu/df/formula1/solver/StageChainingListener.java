package org.lu.df.formula1.solver;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.variable.VariableListener;
import ai.timefold.solver.core.api.score.director.ScoreDirector;
import org.lu.df.formula1.domain.RoutingSolution;
import org.lu.df.formula1.domain.Stage;

import java.util.Comparator;
import java.util.List;

@PlanningEntity
public class StageChainingListener implements VariableListener<RoutingSolution, Stage> {

    @Override
    public void beforeVariableChanged(ScoreDirector<RoutingSolution> scoreDirector, Stage stage) {

    }

    @Override
    public void afterVariableChanged(ScoreDirector<RoutingSolution> scoreDirector, Stage stage) {
        List<Stage> stages = scoreDirector.getWorkingSolution().getStageList();

        // Find and set the previous stage
        Stage previousStage = findPreviousStage(stages, stage);
        if (previousStage != null) {
            scoreDirector.beforeVariableChanged(stage, "previous");
            stage.setPrevious(previousStage);
            scoreDirector.afterVariableChanged(stage, "previous");

            scoreDirector.beforeVariableChanged(previousStage, "next");
            previousStage.setNext(stage);
            scoreDirector.afterVariableChanged(previousStage, "next");
        } else {
            scoreDirector.beforeVariableChanged(stage, "previous");
            stage.setHeadquarters(true);
            scoreDirector.afterVariableChanged(stage, "previous");
        }

        // Find and set the next stage
        Stage nextStage = findNextStage(stages, stage);
        if (nextStage != null) {
            scoreDirector.beforeVariableChanged(stage, "next");
            stage.setNext(nextStage);
            scoreDirector.afterVariableChanged(stage, "next");

            scoreDirector.beforeVariableChanged(nextStage, "previous");
            nextStage.setPrevious(stage);
            scoreDirector.afterVariableChanged(nextStage, "previous");
        } else {
            scoreDirector.beforeVariableChanged(stage, "next");
            stage.setHeadquarters(false);
            scoreDirector.afterVariableChanged(stage, "next");
        }

    }

    @Override
    public void beforeEntityAdded(ScoreDirector<RoutingSolution> scoreDirector, Stage stage) {

    }

    @Override
    public void afterEntityAdded(ScoreDirector<RoutingSolution> scoreDirector, Stage stage) {

    }

    @Override
    public void beforeEntityRemoved(ScoreDirector<RoutingSolution> scoreDirector, Stage stage) {

    }

    @Override
    public void afterEntityRemoved(ScoreDirector<RoutingSolution> scoreDirector, Stage stage) {

    }

    private Stage findPreviousStage(List<Stage> stages, Stage currentStage) {
        return stages.stream()
                .filter(stage -> stage.getWeek() < currentStage.getWeek())
                .max(Comparator.comparingInt(Stage::getWeek))
                .orElse(null);
    }

    private Stage findNextStage(List<Stage> stages, Stage currentStage) {
        return stages.stream()
                .filter(stage -> stage.getWeek() > currentStage.getWeek())
                .min(Comparator.comparingInt(Stage::getWeek))
                .orElse(null);
    }
}
