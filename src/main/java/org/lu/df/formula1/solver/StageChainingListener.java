package org.lu.df.formula1.solver;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.variable.VariableListener;
import ai.timefold.solver.core.api.score.director.ScoreDirector;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.lu.df.formula1.domain.RoutingSolution;
import org.lu.df.formula1.domain.Stage;

@PlanningEntity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StageChainingListener implements VariableListener<RoutingSolution, Stage> {

    @Override
    public void beforeVariableChanged(ScoreDirector<RoutingSolution> scoreDirector, Stage stage) {

    }

    @Override
    public void afterVariableChanged(ScoreDirector<RoutingSolution> scoreDirector, Stage stage) {
        // TO DO
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
}
