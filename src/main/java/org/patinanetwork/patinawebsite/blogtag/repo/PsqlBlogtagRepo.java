package org.patinanetwork.patinawebsite.blogtag.repo;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.patinawebsite.blogtag.protos.Blogtag;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.List;

@Component(value = "PsqlBlogtagRepo")
public class PsqlBlogtagRepo implements BlogTagRepo {

    DBConnection dbConnection;
    Connection conn;

    public PsqlBlogtagRepo(DBConnection dbConnection) {
        this.dbConnection = dbConnection;
        conn = dbConnection.getConn();
    }

    //create a Blogtag
    public Blogtag addBlogtag(Blogtag blogtag) {
        try {
            PreparedStatement st = conn.prepareStatement("INSERT INTO blogtag (id, name) VALUES (?, ?)");
            st.setInt(1, blogtag.getId());
            st.setString(2, blogtag.getName());
            st.executeUpdate();
            st.close();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return blogtag;
    }

    @Override
    public Blogtag getBlogtag(int blogtagId) {
        return null;
    }


    @Override
    public Blogtag getBlogtagById(int id) {
        return null;
    }

    @Override
    public List<Blogtag> listAllBlogtag() {
        return List.of();
    }

}
