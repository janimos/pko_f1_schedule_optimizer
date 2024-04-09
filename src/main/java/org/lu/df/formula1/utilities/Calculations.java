package org.lu.df.formula1.utilities;

import org.lu.df.formula1.domain.Location;
import org.lu.df.formula1.domain.Stage;

import java.util.List;

public class Calculations {

    // Calculate total costs from traveling distance
    public static Double getTotalCost(List<Stage> stages) {
        Double totalCost = 0.0;
        Location previousLocation = GlobalConstants.headquarters;

        for (Stage stage : stages) {
            totalCost += previousLocation.distanceTo(stage.getLocation());
            previousLocation = stage.getLocation();
        }

        totalCost += previousLocation.distanceTo(GlobalConstants.headquarters);

        return totalCost;
    }

    public static Double getTotalIncome(List<Stage> stages) {
        Double totalIncome = 0.0;

        for (Stage stage : stages) {
            totalIncome += getStageIncome(stage);
        }

        return totalIncome;
    }

    private static Double getStageIncome(Stage stage){
        return stage.getAttendance().get(stage.getWeek());
    }
}
