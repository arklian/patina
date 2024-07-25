package org.patinanetwork.patinawebsite.events.infra;

import org.patinanetwork.patinawebsite.events.Event;

/**
 * Interface for getting Events from various sources
 */
public interface EventsRepo {
    Event getEvent(int eventId);
}
