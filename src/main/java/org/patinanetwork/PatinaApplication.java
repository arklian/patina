package org.patinanetwork;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class PatinaApplication {

    public static void main(String[] args) {
        SpringApplication.run(PatinaApplication.class, args);
    }
}