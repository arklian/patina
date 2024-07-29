package org.patinanetwork.common.db;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * DB Connection to the main Patina DB hosted in Digital Ocean
 * Todo: Create different configs for local/dev/prod
 * Todo: Create connection pool
 * Todo: Handle sql exceptions properly
 */
@Component
@EnableConfigurationProperties(DBProperties.class)
public class DBConnection {
    final DBProperties dbProperties;
    public Connection conn = null;

    public DBConnection(DBProperties dbProperties) {
        this.dbProperties = dbProperties;
    }

    // Users call this to get a connection for queries
    public Connection getConn() {
        return conn;
    }

    @PostConstruct
    private void populateConn() {
        String url = dbProperties.getConnection();
        try {
            conn = DriverManager.getConnection(url);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @PreDestroy
    private void closeConn() {
        if (conn != null) {
            try {
                // Todo: Check for active transactions before closing
                conn.close();
            } catch (SQLException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
