package org.patinanetwork.common.protos;

import com.google.protobuf.InvalidProtocolBufferException;
import com.google.protobuf.MessageOrBuilder;
import com.google.protobuf.util.JsonFormat;
import org.springframework.stereotype.Component;

/**
 * Parser to convert JSON from POST requests into their corresponding Proto message.
 * Todo(Henry): Figure out json printer settings
 * Todo(Henry): Figure out exception handling
 */
@Component
public class JsonPrinter {
    JsonFormat.Printer jsonPrinter = JsonFormat.printer().alwaysPrintFieldsWithNoPresence();

    public String print(MessageOrBuilder message) {
        try {
            return jsonPrinter.print(message);
        } catch (InvalidProtocolBufferException e) {
            throw new RuntimeException(e);
        }
    }
}
