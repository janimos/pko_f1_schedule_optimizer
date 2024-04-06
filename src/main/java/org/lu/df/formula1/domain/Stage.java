package org.lu.df.formula1.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.variable.InverseRelationShadowVariable;
import ai.timefold.solver.core.api.domain.variable.NextElementShadowVariable;
import ai.timefold.solver.core.api.domain.variable.PreviousElementShadowVariable;
import com.fasterxml.jackson.annotation.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
    private String name;

    private Location location;

    private List<Double> attendance = new ArrayList<>();

    private Integer week;

    @JsonIgnore
    @NextElementShadowVariable(sourceVariableName = "stages")
    private Stage next;

    @JsonIgnore
    @PreviousElementShadowVariable(sourceVariableName = "stages")
    private Stage previous;

    @Override
    public String toString(){
        return this.getName();
    }
}
