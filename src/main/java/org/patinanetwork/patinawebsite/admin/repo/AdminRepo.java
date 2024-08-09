package org.patinanetwork.patinawebsite.admin.repo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class AdminRepo {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public AdminRepo(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    /**
     * Check if an admin exists by email.
     * @param email The email to check.
     * @return True if the admin exists, otherwise false.
     */
    public boolean existsByEmail(String email) {
        String sql = "SELECT COUNT(*) FROM \"Admin\" WHERE email = ?";
        Integer count = jdbcTemplate.queryForObject(sql, new Object[]{email}, Integer.class);
        return count != null && count > 0;
    }

    /**
     * Check if an admin exists by username.
     * @param username The username to check.
     * @return True if the admin exists, otherwise false.
     */
    public boolean existsByUsername(String username) {
        String sql = "SELECT COUNT(*) FROM \"Admin\" WHERE username = ?";
        Integer count = jdbcTemplate.queryForObject(sql, new Object[]{username}, Integer.class);
        return count != null && count > 0;
    }

    /**
     * Find an admin by email.
     * @param email The email to search.
     * @return The admin's username if exists, otherwise empty.
     */
    public Optional<String> findUsernameByEmail(String email) {
        String sql = "SELECT username FROM \"Admin\" WHERE email = ?";
        return Optional.ofNullable(jdbcTemplate.queryForObject(sql, new Object[]{email}, String.class));
    }
}
