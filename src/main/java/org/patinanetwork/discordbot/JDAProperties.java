package org.patinanetwork.discordbot;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "jda.discord")
public class JDAProperties {
    private String token = "xxx";

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
