package org.patinanetwork.patinawebsite.auth.account.repo;

import org.patinanetwork.patinawebsite.auth.account.protos.Account;

public interface AccountRepo {
    void createAccount(Account account);
    boolean accountExists(Account account);
}
