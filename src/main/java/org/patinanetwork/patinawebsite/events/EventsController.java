package org.patinanetwork.patinawebsite.events;

import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.common.protos.JsonPrinter;
import org.patinanetwork.patinawebsite.events.infra.EventsRepo;
import org.patinanetwork.patinawebsite.events.protos.CreateEventReq;
import org.patinanetwork.patinawebsite.events.protos.CreateEventResp;
import org.patinanetwork.patinawebsite.events.protos.DeleteEventResp;
import org.patinanetwork.patinawebsite.events.protos.Event;
import org.patinanetwork.patinawebsite.events.protos.GetEventResp;
import org.patinanetwork.patinawebsite.events.protos.ListEventResp;
import org.patinanetwork.patinawebsite.events.protos.EventCountResp;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Backend to handle REST api requests for events on the Patina Network website.
 */
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class EventsController {
    EventsRepo eventsRepo;
    JsonPrinter jsonPrinter;
    JsonParser jsonParser;

    public EventsController(EventsRepo eventsRepo, JsonPrinter jsonPrinter, JsonParser jsonParser) {
        this.eventsRepo = eventsRepo;
        this.jsonPrinter = jsonPrinter;
        this.jsonParser = jsonParser;
    }

    @GetMapping(value = "/api/event/{eventId}")
    public String getEvent(@PathVariable("eventId") int eventId) {
        Event event = eventsRepo.getEvent(eventId);
        GetEventResp resp = GetEventResp.newBuilder().setEvent(event).build();
        return jsonPrinter.print(resp);
    }

    @GetMapping(value = "/api/events")
    public String listEvents() {
        List<Event> events = eventsRepo.listEvents();
        ListEventResp resp = ListEventResp.newBuilder().addAllEvents(events).build();
        return jsonPrinter.print(resp);
    }

    @GetMapping(value = "/api/admin/events/size")
    public String getEventCount() {
        int count = eventsRepo.getEventCount();
        EventCountResp response = EventCountResp.newBuilder().setCount(count).build();
        return jsonPrinter.print(response);
    }

    @DeleteMapping(value = "/api/admin/event/delete/{eventId}")
    public String deleteEvent(@PathVariable("eventId") int eventId) {
        Event event = eventsRepo.deleteEvent(eventId);
        DeleteEventResp resp = DeleteEventResp.newBuilder().setEvent(event).build();
        return jsonPrinter.print(resp);
    }

    @PostMapping(value = "/api/admin/events/add", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String createEvent(@RequestBody String jsonEvent) {
        CreateEventReq req = jsonParser.parse(jsonEvent, CreateEventReq.newBuilder());
        Event event = req.getEvent();
        eventsRepo.createEvent(event);
        CreateEventResp resp = CreateEventResp.newBuilder().setEvent(event).build();
        return jsonPrinter.print(resp);
    }
}
