# Protobufs

Protobufs (Protocol Buffers) is a language agnostic way of creating data models.
https://protobuf.dev/overview/

Pros:
- Language Agnostic
- Code Gen
- Binary Encodable
- Condense and Concise

Instead of creating Java objects to hold our models, we can use protobufs. 

## Style Guide
https://protobuf.dev/programming-guides/style/
- Proto File Names 
  - Should use lower_case_underscore_separated_names and must use the extension .proto.
  - ex. service_controller.proto.
    

## Message Vs Data
Protobufs can be used as both a domain model for data, and a over the wire message.
To allow for changes in the internal model without effecting the clients that use the message,
it's often best to have separate messages for each.
https://protobuf.dev/programming-guides/api/#use-different-messages

While we could send base 64 encoded strings across the wire as protos, it seems best to still use
JSON over the wire, until more tools are created or integrated. JSON is a lot easier to debug
through the Chrome debugging tool's Network tab.


## Future Work
TODO(Henry)  
Validation: https://github.com/bufbuild/protovalidate
gRPC: https://grpc.io/
Typescript Support: https://github.com/stephenh/ts-proto

## References
Style Guide: https://protobuf.dev/programming-guides/style/
Best Practices: https://protobuf.dev/programming-guides/dos-donts/
API Guide: https://protobuf.dev/programming-guides/api/
Google Api Design: https://cloud.google.com/apis/design
Ecosystem List: https://github.com/grpc-ecosystem/awesome-grpc

