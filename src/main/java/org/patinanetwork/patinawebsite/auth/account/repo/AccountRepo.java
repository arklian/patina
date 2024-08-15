package org.patinanetwork.patinawebsite.auth.account.repo;

public interface AccountRepo {
    void createAccount(String email, String username);
    boolean accountExists(String email);
    // Get the size of blog table
    int getAccountCount();
}
