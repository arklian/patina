package org.patinanetwork.patinawebsite.blogtag.repo;

import org.patinanetwork.patinawebsite.blogtag.protos.Blogtag;

import java.util.List;

public interface BlogTagRepo {
    // Add a new blog
    Blogtag addBlogtag(Blogtag blogtag);

    Blogtag getBlogtag(int blogtagId);

    // Get a blog by its ID
    Blogtag getBlogtagById(int blogtagId);

    // List all blogs
    List<Blogtag> listAllBlogtag();
}
