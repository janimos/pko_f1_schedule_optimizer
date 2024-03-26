package org.lu.df.formula1.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Stage {
    private String name;

    private Location location;

    private double[] attendance = new double[37];
}
