package org.lu.df.formula1.utilities;

import org.lu.df.formula1.domain.Location;
import org.lu.df.formula1.domain.Stage;

import java.util.List;

public class Calculations {

    // Calculate total costs from traveling distance
    public static Double getStageCost(Stage stage) {
        Double travelCost = 0.0;
        Location previousLocation;

        if (stage.getPrevious() == null) {
            previousLocation = GlobalConstants.headquarters;
            travelCost = previousLocation.distanceTo(stage.getLocation());
        } else if (stage.getNext() != null) {
            travelCost = stage.getPrevious().getLocation().distanceTo(stage.getLocation());
        } else {
            travelCost = stage.getPrevious().getLocation().distanceTo(stage.getLocation());
            travelCost += stage.getLocation().distanceTo(GlobalConstants.headquarters);
        }

        return travelCost;
    }

    public static Double getStageIncome(Stage stage){
        return stage.getAttendance().get(stage.getWeek());
    }
}
