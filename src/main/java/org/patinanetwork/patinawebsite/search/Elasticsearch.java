package org.patinanetwork.patinawebsite.search;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.elasticsearch.core.SearchResponse;
import co.elastic.clients.elasticsearch.core.search.HighlightField;
import co.elastic.clients.transport.rest_client.RestClientTransport;
import co.elastic.clients.json.jackson.JacksonJsonpMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.apache.http.HttpHost;
import org.elasticsearch.client.RestClient;
import co.elastic.clients.transport.ElasticsearchTransport;
import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.patinawebsite.blogs.protos.Blog;
import org.patinanetwork.patinawebsite.blogs.protos.ListBlogResp;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class Elasticsearch {
    public static List<Blog> run(String searchQuery) throws IOException {
        // Create the client
        RestClient restClient =
                RestClient.builder(new HttpHost("localhost", 9201)).build();

        // Create the transport with a Jackson mapper
        // TODO: Replace jackson mapper with raw string to avoid multiple conversions between json and string
        ElasticsearchTransport transport = new RestClientTransport(restClient, new JacksonJsonpMapper());

        // And create the API client
        ElasticsearchClient esClient = new ElasticsearchClient(transport);

        SearchResponse<ObjectNode> response = esClient.search(
                s -> s.index("patina")
                        .query(q -> q.multiMatch(
                                mm -> mm.fields("title", "content", "author")
                                        .query(searchQuery)
                                        .fuzziness("AUTO") // Adjust fuzziness as needed
                                )),
                ObjectNode.class);

        JsonParser jsonParser = new JsonParser();
        List<Blog> blogsList = new ArrayList<>();
        // Add each hit to the list of blogs
        response.hits().hits().forEach(hit -> {
            ObjectNode node = hit.source();
            Blog blog = jsonParser.parse(node.toString(), Blog.newBuilder());
            blogsList.add(blog);
        });

        // Close the transport, freeing the underlying thread
        try {
            transport.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return blogsList;
    }
}
