package org.patinanetwork.patchats.repo;

import org.patinanetwork.patchats.protos.PatChatMember;

public interface PatChatRepo {

    public PatChatMember getPatChatMember(int id);

    public PatChatMember deletePatChatMember(int id);
}
