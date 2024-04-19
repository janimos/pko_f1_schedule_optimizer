package org.lu.df.formula1.utilities;

import org.lu.df.formula1.domain.Location;
import org.lu.df.formula1.domain.Stage;

public class Calculations {

    public static Double getStageTravelDistance(Stage stage) {
        Double travelDistance = 0.0;
        Location previousLocation;

        if (stage.getPrevious() == null) {
            previousLocation = GlobalConstants.headquarters;
            travelDistance = previousLocation.distanceTo(stage.getLocation());
        } else if (stage.getNext() != null) {
            travelDistance = stage.getPrevious().getLocation().distanceTo(stage.getLocation());
        } else {
            travelDistance = stage.getPrevious().getLocation().distanceTo(stage.getLocation());
            travelDistance += stage.getLocation().distanceTo(GlobalConstants.headquarters);
        }

        return travelDistance;
    }

    // Calculate total costs from traveling distance
    public static Double getTravelCost(Double travelDistance) {
        return (
                travelDistance * (
                        GlobalConstants.pricePerKilometer + GlobalConstants.emissionsPricePerKilometer()
                )
        ) / GlobalConstants.priceDelimiter * GlobalConstants.estimatedEmployeeAmount;
    }

    public static Double getStageIncome(Stage stage) {
        return (
                stage.getAttendance()
                        .get(stage.getWeek()) * GlobalConstants.averagePrice
        ) / GlobalConstants.priceDelimiter;
    }

    public static Boolean isStageAtOffWeek(Stage stage) {
        return stage.getWeek() >= GlobalConstants.getOffWeekStart() && stage.getWeek() <= GlobalConstants.getOffWeekEnd();
    }

    public static  Double getCargoCost() {
        return (GlobalConstants.cargoWeight * GlobalConstants.cargoPricePerKm);
    }
}
