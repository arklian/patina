package org.patinanetwork.patinawebsite.generator;

import com.cjcrafter.openai.OpenAI;
import com.cjcrafter.openai.chat.ChatMessage;
import com.cjcrafter.openai.chat.ChatRequest;
import com.cjcrafter.openai.chat.ChatResponse;

import java.util.ArrayList;
import java.util.List;

public class ChatGPT {

    public static void main(String[] args) {
        List<String> output = fakeOutputs();

        for (int i = 0; i < 50; i++) {
            System.out.println(output.get(i));
        }
        // Make sure to add the response to the messages list!
        // messages.add(response.get(0).getMessage());
    }

    public static List<String> listOutputs(int num) {
        List<String> output = new ArrayList<>();
        ChatResponse response = generateNMessages(num);
        for (int i = 0; i < num; i++) {
            output.add(response.get(i).getMessage().getContent());
        }
        return output;
    }

    public static List<String> fakeOutputs() {
        List<String> output = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            output.add("Fake " + i);
        }
        return output;
    }

    public static ChatResponse generateNMessages(int n) {
        String key = System.getenv("CHATGPT_SECRET");
        OpenAI openai = OpenAI.builder().apiKey(key).build();

        List<ChatMessage> message = new ArrayList<>();
        String input = "Write me a technical blog post under 300 words";
        message.add(ChatMessage.toUserMessage(input));

        // Here you can change the model's settings, add tools, and more.
        ChatRequest request = ChatRequest.builder()
                .model("gpt-4o-mini")
                .messages(message)
                .maxTokens(450)
                .n(n)
                .build();

        return openai.createChatCompletion(request);
    }
}
