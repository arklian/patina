package org.patinanetwork.patinawebsite.events;

public class Event {

    public int id;
    public String name;
    public String location;
    public String message;
    public String date; // Date in ISO format: yyyy-mm-dd

    public Event() {
        this.id = 0;
        this.name = "placeholder";
        this.location = "placeholder";
        this.message = "placeholder";
        this.date = "2024-07-25";
    }

    public Event(int id, String name, String location, String message, String date) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.message = message;
        this.date = date;
    }
}
