package org.patinanetwork.common.db;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Component
@EnableConfigurationProperties(DBProperties.class)
public class DBConnection {
    final DBProperties dbProperties;

    public DBConnection(DBProperties dbProperties) {
        this.dbProperties = dbProperties;
    }

    public Connection getConn() {
        String url = dbProperties.getConnection();
        Connection conn;
        try {
            conn = DriverManager.getConnection(url);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return conn;
    }
}
