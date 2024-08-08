package org.patinanetwork.patinawebsite.blogtag;

import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.common.protos.JsonPrinter;
import org.patinanetwork.patinawebsite.blogtag.protos.Blogtag;
import org.patinanetwork.patinawebsite.blogtag.protos.CreateBlogtagReq;
import org.patinanetwork.patinawebsite.blogtag.protos.CreateBlogtagResp;
import org.patinanetwork.patinawebsite.blogtag.repo.BlogTagRepo;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class BlogTagController {

    BlogTagRepo blogTagRepo;
    JsonPrinter jsonPrinter;
    JsonParser jsonParser;

    public BlogTagController(BlogTagRepo blogTagRepo, JsonPrinter jsonPrinter, JsonParser jsonParser) {
        this.blogTagRepo = blogTagRepo;
        this.jsonPrinter = jsonPrinter;
        this.jsonParser = jsonParser;
    }

    @GetMapping(value = "/api/blogtag/{blogtagId}")
    public String getBlogtag(@PathVariable("blogtagId") int blogtagId) {
        Blogtag blogtag = blogTagRepo.getBlogtagById(blogtagId);
        GetBl
        return jsonPrinter.print(resp);
    }
}
