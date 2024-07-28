package org.patinanetwork.common.protos;

import com.google.protobuf.GeneratedMessage;
import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.Message;
import com.google.protobuf.util.JsonFormat;
import org.springframework.stereotype.Component;

/**
 * Parser to convert JSON from POST requests into their corresponding Proto message.
 * Todo(Henry): Figure out json parser settings
 * Todo(Henry): Figure out exception handling
 */
@Component
public class JsonParser {
    JsonFormat.Parser jsonParser = JsonFormat.parser().ignoringUnknownFields();

    /**
     * Usage:
     * GetEventReq builder = GetEventReq.newBuilder();
     * GetEventReq getEventReq = javaParser.merge(json, builder).build()
     *
     * @param json String to parse
     * @param builder Builder of the proto
     */
    public Message.Builder merge(String json, Message.Builder builder) {
        try {
            jsonParser.merge(json, builder);
            return builder;
        } catch (InvalidProtocolBufferException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Automatically cast the json into the given proto builder.
     * Todo(Henry): Figure out if this unchecked type casting is fine.
     * Usage:
     *   GetEventReq b = jsonParser.parse("{\"id\":3}", GetEventReq.newBuilder());
     * @param json Json to be parsed
     * @param builder Builder of proto to be parsed into
     * @return Instance of proto with values filled in
     * @param <T> Proto Class e.g. GetEventReq
     */
    @SuppressWarnings("unchecked")
    public <T extends GeneratedMessage> T parse(String json, GeneratedMessage.Builder<?> builder) {
        try {
            jsonParser.merge(json, builder);
            return (T) builder.build();
        } catch (InvalidProtocolBufferException e) {
            throw new RuntimeException(e);
        }
    }
}
