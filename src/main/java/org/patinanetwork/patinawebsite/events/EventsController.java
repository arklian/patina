package org.patinanetwork.patinawebsite.events;

import org.patinanetwork.patinawebsite.events.infra.EventsRepo;
import org.patinanetwork.patinawebsite.events.protos.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * Backend to handle REST api requests for events on the Patina Network website.
 */
@RestController
public class EventsController {
    EventsRepo eventsRepo;

    public EventsController(EventsRepo eventsRepo) {
        this.eventsRepo = eventsRepo;
    }

    @GetMapping("/api/event/{eventId}")
    public String test(@PathVariable("eventId") int eventId) {
        Event event = eventsRepo.getEvent(eventId);
        return event.getMessage();
    }
}
