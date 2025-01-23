package org.patinanetwork.patchats.ops;

import org.patinanetwork.patchats.protos.MatchGroup;
import org.patinanetwork.patchats.protos.MatchPatChatMemberResp;
import org.patinanetwork.patchats.protos.PatChatMember;
import org.patinanetwork.patchats.repo.PatChatRepo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/**
 * Operation to handle the matchPatChatMember endpoint
 */
public class MatchPatChatMemberOp {
    PatChatRepo patChatRepo;

    public MatchPatChatMemberOp(PatChatRepo patChatRepo) {
        this.patChatRepo = patChatRepo;
    }

    public List<List<PatChatMember>> matchPatChatMember() {
        List<PatChatMember> allMembers = patChatRepo.listPatChatMembers();

        if (allMembers == null || allMembers.isEmpty()) {
            throw new RuntimeException("No members found in the database");
        }

        // Given an uneven number of participants, match the participant with the Henry object.
        // For now, I'm assuming that Henry's id will be 1 in the table
        PatChatMember henry = allMembers.stream()
                .filter(member -> member.getId() == 1)
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Member with id 1 not found"));

        // Filters Henry out of the Patchats user table so everyone else can be matched.
        List<PatChatMember> members = new ArrayList<>(
                allMembers.stream().filter(member -> member.getId() != 1).toList());

        Collections.shuffle(members);

        // Creates list of tuples of matches
        List<List<PatChatMember>> matches = new ArrayList<>();

        for (int i = 0; i < members.size(); i += 2) {
            List<PatChatMember> pair = new ArrayList<>();
            pair.add(members.get(i));
            if (i + 1 < members.size()) {
                pair.add(members.get(i + 1));
            } else {
                pair.add(henry);
            }
            matches.add(pair);
        }
        return matches;
    }

    public MatchPatChatMemberResp run() {
        List<List<PatChatMember>> matchedGroups = matchPatChatMember();

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
