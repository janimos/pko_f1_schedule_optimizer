package org.lu.df.formula1.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Location {
    private Double latitude;
    private Double longitude;

    public Double distanceTo (Location location){
        return Math.sqrt(
            Math.pow(this.latitude - location.latitude, 2) +
            Math.pow(this.longitude - location.longitude, 2)
        );
    }
}
