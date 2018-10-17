package com.vladefr97.filefinder.entity;

public class ServerAnswer<Message, Entity> {

    Message message;//Message from server
    Entity entity;//Entity in server answer

    public ServerAnswer(Message message, Entity entity) {
        this.message = message;
        this.entity = entity;
    }

    public ServerAnswer(Message message) {
        this.message = message;
    }

    public Message getMessage() {
        return message;
    }

    public Entity getEntity() {
        return entity;
    }
}
