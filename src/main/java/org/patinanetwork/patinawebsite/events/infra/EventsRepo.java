package org.patinanetwork.patinawebsite.events.infra;

import org.patinanetwork.patinawebsite.events.protos.Event;

import java.util.List;

/**
 * Interface for getting Events from various sources
 */
public interface EventsRepo {

    // Get event by id
    Event getEvent(int eventId);

    // List all events
    List<Event> listEvents();
}
