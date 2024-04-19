package org.lu.df.formula1.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Location {
    @JsonProperty("address")
    private String address;

    @JsonProperty("latitude")
    private Double latitude;

    @JsonProperty("longitude")
    private Double longitude;

    public Double distanceTo (Location location){
        final Double R = 6371.0;

        Double lat1 = Math.toRadians(this.latitude);
        Double lon1 = Math.toRadians(this.longitude);
        Double lat2 = Math.toRadians(location.latitude);
        Double lon2 = Math.toRadians(location.longitude);

        Double diffLat = lat2 - lat1;
        Double diffLon = lon2 - lon1;

        Double a = Math.pow(Math.sin(diffLat / 2), 2)
                + Math.cos(lat1) * Math.cos(lat2)
                * Math.pow(Math.sin(diffLon / 2), 2);

        Double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c;
    }
}
