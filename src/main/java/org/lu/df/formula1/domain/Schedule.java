package org.lu.df.formula1.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.variable.PlanningListVariable;
import ai.timefold.solver.core.api.domain.variable.PlanningVariable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@PlanningEntity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Schedule {

    private Location headquarters = new Location(
            "2 St. James's Market, London, U.K.",
            51.0,
            0.0
    );

    private String name;

    @PlanningListVariable
    private List<Stage> stages = new ArrayList<>();

    private Double income;

    // Calculate total costs from traveling distance
    public Double getTotalCost() {
        Double totalCost = 0.0;
        Location previousLocation = this.getHeadquarters();

        for (Stage stage: this.getStages()){
            totalCost += previousLocation.distanceTo(stage.getLocation());
            previousLocation = stage.getLocation();
        }

        totalCost += previousLocation.distanceTo(this.getHeadquarters());

        return totalCost;
    }
}
