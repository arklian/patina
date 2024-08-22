package org.patinanetwork.patinawebsite.blogtag;

import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.common.protos.JsonPrinter;
import org.patinanetwork.patinawebsite.blogtag.protos.Blogtag;
import org.patinanetwork.patinawebsite.blogtag.protos.CreateBlogtagReq;
import org.patinanetwork.patinawebsite.blogtag.protos.CreateBlogtagResp;
import org.patinanetwork.patinawebsite.blogtag.repo.BlogtagRepo;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class BlogtagController {

    BlogtagRepo blogtagRepo;
    JsonPrinter jsonPrinter;
    JsonParser jsonParser;

    public BlogtagController(BlogtagRepo blogtagRepo, JsonPrinter jsonPrinter, JsonParser jsonParser) {
        this.blogtagRepo = blogtagRepo;
        this.jsonPrinter = jsonPrinter;
        this.jsonParser = jsonParser;
    }


    @PostMapping(value = "/api/blogtag/add", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String addBlogtag(@RequestBody String jsonRequest) {
        CreateBlogtagReq blogtagReq = jsonParser.parse(jsonRequest, CreateBlogtagReq.newBuilder());
        Blogtag blogtag = Blogtag.newBuilder()
                .setName(blogtagReq.getBlogtag().getName())
                .build();
        Blogtag newBlogTag = blogtagRepo.addBlogtag(blogtag);
        CreateBlogtagResp resp = CreateBlogtagResp.newBuilder().setBlogtag(newBlogTag).build();
        return jsonPrinter.print(resp);
    }
}

