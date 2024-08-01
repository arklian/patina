package org.patinanetwork.patinawebsite.blogs;

public class BlogResponse {
    private String name;
    private String title;
    private String content;

    public BlogResponse(String name, String title, String content) {
        this.name = name;
        this.title = title;
        this.content = content;
    }

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
