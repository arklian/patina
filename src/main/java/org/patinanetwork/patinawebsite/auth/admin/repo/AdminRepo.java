package org.patinanetwork.patinawebsite.auth.admin.repo;

import org.patinanetwork.patinawebsite.auth.account.protos.Account;
public interface AdminRepo {
    boolean isAdmin(Account account);
}
