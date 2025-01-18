package org.patinanetwork.patchats.repo;

import org.patinanetwork.patinawebsite.blogs.protos.PatChatMember;

public interface PatChatRepo {

    public PatChatMember getPatChatMember(int id);
}
