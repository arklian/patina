package org.patinanetwork.patinawebsite.blogtag.repo;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.patinawebsite.blogtag.protos.Blogtag;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@Component(value = "PsqlBlogtagRepo")
public class PsqlBlogtagRepo implements BlogtagRepo {

    DBConnection dbConnection;
    Connection conn;

    public PsqlBlogtagRepo(DBConnection dbConnection) {
        this.dbConnection = dbConnection;
        conn = dbConnection.getConn();
    }

    //TODO: Fix SQL injection
    public Blogtag addBlogtag(Blogtag blogtag) {
        try {
            PreparedStatement st = conn.prepareStatement("INSERT INTO blogtag (name) VALUES (?)");
            st.setString(1, blogtag.getName());
            st.executeUpdate();
            st.close();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return blogtag;
    }

    @Override
    public Blogtag getBlogtagById(int blogtagid) {
        Blogtag blogtag = Blogtag.getDefaultInstance();
        try {
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("SELECT name FROM blogtag WHERE id = " + blogtagid);
            while (rs.next()) {
                int id = rs.getInt("id");
                blogtag = getBlogtagById(id);
            }
            rs.close();
            st.close();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return blogtag;
    }

    @Override
    public Blogtag deleteBlogtag(int blogtagId) {
        Blogtag blogtag = Blogtag.getDefaultInstance();
        try {
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("DELETE FROM blogtag WHERE id = " + blogtagId + " RETURNING *");
            while (rs.next()) {
                int id = rs.getInt("id");
                blogtag = getBlogtagById(id);
            }
            rs.close();
            st.close();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return blogtag;
    }

    @Override
    public List<Blogtag> listAllBlogtag() {
        List<Blogtag> blogtags = new ArrayList<>();
        try {
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("SELECT name FROM blogtag");
            while (rs.next()) {
                int id = rs.getInt("id");  // Assuming 'id' is a field in 'blogtag'
                String name = rs.getString("name");
                Blogtag blogtag = getBlogtagById(id);
                blogtags.add(blogtag);
            }
            rs.close();
            st.close();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return blogtags;
    }

}
