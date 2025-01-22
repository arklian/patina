package org.patinanetwork.patchats.ops;

import org.patinanetwork.patchats.protos.MatchGroup;
import org.patinanetwork.patchats.protos.MatchPatChatMemberResp;
import org.patinanetwork.patchats.protos.PatChatMember;
import org.patinanetwork.patchats.repo.PatChatRepo;

import java.util.List;
/**
 * Operation to handle the matchPatChatMember endpoint
 */
public class MatchPatChatMemberOp {
    PatChatRepo patChatRepo;

    public MatchPatChatMemberOp(PatChatRepo patChatRepo) {
        this.patChatRepo = patChatRepo;
    }

    public MatchPatChatMemberResp run() {
        List<List<PatChatMember>> matchedGroups = patChatRepo.matchPatChatMember();

        if (matchedGroups == null || matchedGroups.isEmpty()) {
            throw new RuntimeException("No matched groups found");
        }

        MatchPatChatMemberResp.Builder respBuilder = MatchPatChatMemberResp.newBuilder();

        for (List<PatChatMember> group : matchedGroups) {
            MatchGroup.Builder groupBuilder = MatchGroup.newBuilder();
            groupBuilder.addAllMembers(group);
            respBuilder.addPairs(groupBuilder.build());
        }

        return respBuilder.build();
    }
}
