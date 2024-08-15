package org.patinanetwork.patinawebsite.auth.account;

import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.common.protos.JsonPrinter;
import org.patinanetwork.patinawebsite.blogs.repo.BlogsRepo;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.patinanetwork.patinawebsite.auth.account.repo.AccountRepo;
import org.patinanetwork.patinawebsite.user.protos.AccountCountResp;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class AccountsController {

    AccountRepo accountRepo;
    JsonPrinter jsonPrinter;
    JsonParser jsonParser;

    public AccountsController(AccountRepo accountRepo, JsonPrinter jsonPrinter, JsonParser jsonParser) {
        this.accountRepo = accountRepo;
        this.jsonPrinter = jsonPrinter;
        this.jsonParser = jsonParser;
    }

    @GetMapping(value = "/api/admin/user/size")
    public String getAccountCount() {
        int count = accountRepo.getAccountCount();
        AccountCountResp response = AccountCountResp.newBuilder().setCount(count).build();
        return jsonPrinter.print(response);
    }
}
