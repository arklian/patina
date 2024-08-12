package org.patinanetwork.patinawebsite.blogtag;

import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.common.protos.JsonPrinter;
import org.patinanetwork.patinawebsite.blogtag.protos.Blogtag;
import org.patinanetwork.patinawebsite.blogtag.protos.CreateBlogtagReq;
import org.patinanetwork.patinawebsite.blogtag.protos.CreateBlogtagResp;
import org.patinanetwork.patinawebsite.blogtag.protos.DeleteBlogtagResp;
import org.patinanetwork.patinawebsite.blogtag.protos.GetBlogtagResp;
import org.patinanetwork.patinawebsite.blogtag.protos.ListBlogtagResp;
import org.patinanetwork.patinawebsite.blogtag.repo.BlogtagRepo;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @GetMapping(value = "/api/blogtag/{blogtagId}")
    public String getBlogtag(@PathVariable("blogtagId") int blogtagId) {
        Blogtag blogtag = blogtagRepo.getBlogtagById(blogtagId);
        GetBlogtagResp resp = GetBlogtagResp.newBuilder().setBlogtag(blogtag).build();
        return jsonPrinter.print(resp);
    }

    @PostMapping(value = "/api/blogtag/add", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String createBlogtag(@RequestBody String jsonRequest) {
        System.out.println(jsonRequest);

        CreateBlogtagReq blogtagReq = jsonParser.parse(jsonRequest, CreateBlogtagReq.newBuilder());

        System.out.println(blogtagReq + "**");

        Blogtag blogtag = Blogtag.newBuilder()
                .setName(blogtagReq.getBlogtag().getName())
                .build();
        blogtagRepo.addBlogtag(blogtag);
        CreateBlogtagResp resp = CreateBlogtagResp.newBuilder().setBlogtag(blogtag).build();
        return jsonPrinter.print(resp);
    }

    @PostMapping(value = "/api/blogtag/delete/ {blogtagId}")
    public String deleteBlogtag(@PathVariable("blogtagId") int blogtagId) {
        Blogtag blogtag = blogtagRepo.deleteBlogtag(blogtagId);
        DeleteBlogtagResp resp = DeleteBlogtagResp.newBuilder().setBlogtag(blogtag).build();
        return jsonPrinter.print(resp);
    }

    @GetMapping(value = "/api/blogtag")
    public String listBlogtags() {
        List<Blogtag> blogtags = blogtagRepo.listAllBlogtag();
        ListBlogtagResp resp = ListBlogtagResp.newBuilder().addAllBlogtags(blogtags).build();
        return jsonPrinter.print(resp);
    }
}
