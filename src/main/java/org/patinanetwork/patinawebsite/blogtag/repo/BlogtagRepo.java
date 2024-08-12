package org.patinanetwork.patinawebsite.blogtag.repo;

import org.patinanetwork.patinawebsite.blogtag.protos.Blogtag;

import java.util.List;

public interface BlogtagRepo {
    // Add a new blogtag
    Blogtag addBlogtag(Blogtag blogtag);

    // Get a blogtag by its ID
    Blogtag getBlogtagById(int blogtagId);

    // Get a blog by its ID
    Blogtag getBlogtagById(int blogtagId);

    // List all blogs
    List<Blogtag> listAllBlogtag();
}
