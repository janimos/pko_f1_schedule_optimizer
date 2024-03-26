package org.lu.df.formula1.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Schedule {

    private String name;

    private Integer weekNumber;

    private Stage next;

    private Stage previous;

    private Double income;

    private Double costs;
}
