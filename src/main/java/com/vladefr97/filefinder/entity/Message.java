package com.vladefr97.filefinder.entity;

public class Message {
    String messageText;
    boolean success;

    public Message(String messageText) {
        this.messageText = messageText;
    }

    public Message(String messageText, boolean success) {
        this.messageText = messageText;
        this.success = success;
    }

    public String getMessageText() {
        return messageText;
    }

    public boolean isSuccess() {
        return success;
    }
}
