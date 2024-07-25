package org.patinanetwork;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Component
public class StaticContentFilter implements Filter {

    private List<String> fileExtensions = Arrays.asList(
            "html",
            "js",
            "json",
            "csv",
            "css",
            "png",
            "svg",
            "eot",
            "ttf",
            "woff",
            "appcache",
            "jpg",
            "jpeg",
            "gif",
            "ico");

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        doFilter((HttpServletRequest) request, (HttpServletResponse) response, chain);
    }

    private void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        String path = request.getServletPath();

        boolean isApi = path.startsWith("/api");
        boolean isResourceFile = !isApi && fileExtensions.stream().anyMatch(path::contains);

        if (isApi) {
            response.setContentType("application/plain");
            chain.doFilter(request, response);
        } else if (isResourceFile) {
            chain.doFilter(request, response);
        } else {
            request.getRequestDispatcher("/").forward(request, response);
        }
    }
}
