package org.lu.df.formula1.utilities;

import org.lu.df.formula1.domain.Location;
import org.lu.df.formula1.domain.Stage;

public class Calculations {

    public static Double getTotalTravelDistance(Stage stage) {
        Double totalTravelDistance = 0.0;
        Stage currentStage = stage;
        Location previousLocation = GlobalConstants.headquarters;

        while (currentStage.getNext() != null) {
            totalTravelDistance += previousLocation.distanceTo(currentStage.getLocation());
            previousLocation = currentStage.getLocation();
            currentStage = currentStage.getNext();
        }

        totalTravelDistance += previousLocation.distanceTo(currentStage.getLocation());
        totalTravelDistance += stage.getLocation().distanceTo(GlobalConstants.headquarters);

        return totalTravelDistance;
    }

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

    public static Double getStageFinalIncome(Stage stage) {
        Double stageIncome = getStageIncome(stage);
        Double stageCost = getTravelCost(getStageTravelDistance(stage));

        return (stageIncome - stageCost) / GlobalConstants.priceDelimiter;
    }

    public static Boolean isStageAtOffWeek(Stage stage) {
        return stage.getWeek() >= GlobalConstants.getOffWeekStart() && stage.getWeek() <= GlobalConstants.getOffWeekEnd();
    }
}
