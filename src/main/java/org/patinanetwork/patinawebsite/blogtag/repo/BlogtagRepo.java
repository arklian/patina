package org.patinanetwork.patinawebsite.blogtag.repo;

import org.patinanetwork.patinawebsite.blogtag.protos.Blogtag;

public interface BlogtagRepo {

    // Add a new blogtag
    Blogtag createBlogtag(Blogtag blogtag);

}