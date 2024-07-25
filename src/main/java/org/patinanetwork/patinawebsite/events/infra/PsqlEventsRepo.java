package org.patinanetwork.patinawebsite.events.infra;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.patinawebsite.events.Event;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

@Component(value = "PsqlEventsRepo")
public class PsqlEventsRepo implements EventsRepo {

    DBConnection dbConnection;

    public PsqlEventsRepo(DBConnection dbConnection) {
        this.dbConnection = dbConnection;
    }

    public Event getEvent(int eventId) {
        Connection conn = dbConnection.getConn();
        Event event = new Event();

        try {
            // Todo(Henry): Figure out the best way to build the query that prevents SQL injection and other vulns.
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("SELECT id, name, message, location, date FROM event WHERE id = " + eventId);
            while (rs.next()) {
                var id = rs.getInt("id");
                var name = rs.getString("name");
                var message = rs.getString("message");
                var location = rs.getString("location");
                var sqlDate = rs.getDate("date");

                java.util.Date utilDate = new java.util.Date(sqlDate.getTime());
                DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                final String stringDate = dateFormat.format(utilDate);

                event = new Event(id, name, message, location, stringDate);
            }
            rs.close();
            st.close();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return event;
    }
}
