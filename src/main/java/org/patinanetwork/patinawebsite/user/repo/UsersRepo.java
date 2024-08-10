package org.patinanetwork.patinawebsite.user.repo;

public interface UsersRepo {
    void createUser(String email, String username, String role);
    boolean userExists(String email);
}
