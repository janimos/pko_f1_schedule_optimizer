package org.lu.df.formula1.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Stage {
    private String name;

    private String locationName;

    private Location location;

    private List<Double> attendance = new ArrayList<>();
}
