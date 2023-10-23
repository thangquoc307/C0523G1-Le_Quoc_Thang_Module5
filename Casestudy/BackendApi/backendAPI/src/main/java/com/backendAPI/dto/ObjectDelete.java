package com.backendAPI.dto;

public class ObjectDelete {
    private int id;
    private String objectType;

    public ObjectDelete() {
    }

    public ObjectDelete(int id, String objectType) {
        this.id = id;
        this.objectType = objectType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getObjectType() {
        return objectType;
    }

    public void setObjectType(String objectType) {
        this.objectType = objectType;
    }
}
