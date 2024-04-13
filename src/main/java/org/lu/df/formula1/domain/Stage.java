package org.lu.df.formula1.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.lookup.PlanningId;
import ai.timefold.solver.core.api.domain.variable.*;
import com.fasterxml.jackson.annotation.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.lu.df.formula1.solver.StageChainingListener;

import java.util.ArrayList;
import java.util.List;

@PlanningEntity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@JsonIdentityInfo(
        scope = Stage.class,
        property = "name",
        generator = ObjectIdGenerators.PropertyGenerator.class
)
public class Stage {
    @PlanningId
    private String name;

    private Location location;

    private List<Double> attendance = new ArrayList<>();

    @PlanningVariable(valueRangeProviderRefs = "weekRange")
    @JsonIdentityReference(alwaysAsId = true)
    private Integer week;

    @CustomShadowVariable(variableListenerClass = StageChainingListener.class,
            sources = {@PlanningVariableReference(variableName = "week")})
    @JsonIdentityReference(alwaysAsId = true)
    private Stage next;

    @CustomShadowVariable(variableListenerClass = StageChainingListener.class,
            sources = {@PlanningVariableReference(variableName = "week")})
    @JsonIdentityReference(alwaysAsId = true)
    private Stage previous;

    @Override
    @JsonIgnore
    public String toString(){
        return this.getName();
    }
}
