package org.lu.df.formula1.utilities;

import org.lu.df.formula1.domain.Location;

public class GlobalConstants {
    public static final Location headquarters = new Location(
            "2 St. James's Market, London, U.K.",
            51.0,
            0.0
    );

    public static final int weekCounter = 9;

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
}
