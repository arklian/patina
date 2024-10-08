package org.patinanetwork.patinawebsite.events.infra;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.patinawebsite.events.protos.Event;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

/**
 * Implementation of EventRepo backed by PostgresQL
 * Todo(Henry): Figure out the best way to build the query that prevents SQL injection and other vulns.
 * Todo(Henry): Figure out the best way to handle SQL Exceptions
 */
@Component(value = "PsqlEventsRepo")
public class PsqlEventsRepo implements EventsRepo {

    DBConnection dbConnection;
    Connection conn;

    public PsqlEventsRepo(DBConnection dbConnection) {
        this.dbConnection = dbConnection;
        conn = dbConnection.getConn();
    }

    public Event getEvent(int eventId) {
        Event event = Event.getDefaultInstance();
        try {
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("SELECT id, name, message, location, date FROM event WHERE id = " + eventId);
            while (rs.next()) {
                event = getEvent(rs);
            }
            rs.close();
            st.close();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return event;
    }

    // Todo(Henry): Add Pagination
    public List<Event> listEvents() {
        List<Event> events = new ArrayList<>();
        try {
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("SELECT id, name, message, location, date FROM event");
            while (rs.next()) {
                Event event = getEvent(rs);
                events.add(event);
            }
            rs.close();
            st.close();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return events;
    }

    public Event deleteEvent(int eventId) {
        Event event = Event.getDefaultInstance();
        try {
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("DELETE FROM event WHERE id = " + eventId + " RETURNING *");
            while (rs.next()) {
                event = getEvent(rs);
            }
            rs.close();
            st.close();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return event;
    }

    // Create Event proto from SQL ResultSet
    private static Event getEvent(ResultSet rs) throws SQLException {
        var id = rs.getInt("id");
        var name = rs.getString("name");
        var message = rs.getString("message");
        var location = rs.getString("location");
        var sqlDate = rs.getDate("date");

        java.util.Date utilDate = new java.util.Date(sqlDate.getTime());
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        final String stringDate = dateFormat.format(utilDate);

        return Event.newBuilder()
                .setId(id)
                .setName(name)
                .setMessage(message)
                .setLocation(location)
                .setDate(stringDate)
                .build();
    }

    // TODO: sanitize inputs for sql injection
    public Event createEvent(Event event) {
        try {
            PreparedStatement st = conn.prepareStatement("INSERT INTO event (name, message, location, date) VALUES (?, ?, ?, ?)");
            st.setString(1, event.getName());
            st.setString(2, event.getMessage());
            st.setString(3, event.getLocation());
            st.setDate(4, java.sql.Date.valueOf(event.getDate()));
            st.executeUpdate();
            st.close();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return event;
    }

    @Override
    public int getEventCount() {
        String sql = "SELECT COUNT(*) FROM event";
        try (PreparedStatement stmt = conn.prepareStatement(sql);
             ResultSet rs = stmt.executeQuery()) {
            if (rs.next()) {
                return rs.getInt(1); // Get the count from the first column
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error while retrieving blog count", e);
        }
        return 0;
    }
}
