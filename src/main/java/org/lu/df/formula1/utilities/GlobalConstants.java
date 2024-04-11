package org.lu.df.formula1.utilities;

import ai.timefold.solver.core.api.domain.valuerange.CountableValueRange;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeFactory;
import lombok.Getter;
import lombok.Setter;
import org.lu.df.formula1.domain.Location;


public class GlobalConstants {
    @Getter
    private static int startWeek;
    @Getter
    private static int endWeek;

    public static void setStartEndWeek(int start, int end) {
        startWeek = start;
        endWeek = end;
    }

    @Setter @Getter
    private static int stageCount;

    private static int offWeekStart;
    private static int offWeekEnd;

    public static void setOffWeeks(int start, int end) {
        offWeekStart = start;
        offWeekEnd = end;
    }

    public static CountableValueRange<Integer> getOffWeekRange() {
        return ValueRangeFactory.createIntValueRange(offWeekStart, offWeekEnd);
    }

    public static final Location headquarters = new Location(
            "2 St. James's Market, London, U.K.",
            51.0,
            0.0
    );

    public static final int weekCounter = 9;

    public static final Double priceDelimiter = Math.pow(10, 6);

    // Data source: ticket prices for Formula 1 2023 season schedule, average
    public static final Double averagePrice = 487.87;

    // Data source: https://www.dw.com/en/trains-vs-planes-whats-the-real-cost-of-travel/a-45209552
    private static final Double emissionsPricePerTon = 38.69;
    private static final Double emissionsKgPerKilometer = 0.32;

    public static Double emissionsPricePerKilometer() {
        return emissionsKgPerKilometer * (emissionsPricePerTon / 1000);
    }

    // Source for calculations: https://github.com/dw-data/travel-cost
    public static final Double pricePerKilometer = 0.253;

    public static final int estimatedEmployeeAmount = 3000; // Assumption, all teams have around 600-700 employees at GP + number of Formula 1 and FIA employees

    public static final int penaltyFactor = 5;
}
