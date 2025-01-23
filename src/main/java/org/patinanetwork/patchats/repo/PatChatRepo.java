package org.patinanetwork.patchats.repo;

import org.patinanetwork.patchats.protos.PatChatMember;

import java.util.List;

public interface PatChatRepo {

    public PatChatMember getPatChatMember(int id);

    public List<PatChatMember> listPatChatMembers();

    public PatChatMember deletePatChatMember(int id);

    public PatChatMember addPatChatMember(PatChatMember member);

    //    public List<List<PatChatMember>> matchPatChatMember();
}
