package com.backendAPI.dto;

import com.backendAPI.model.build.RentType;
import com.backendAPI.model.build.RoomType;


public class BuildingDto {
    private Integer id;
    private String name;
    private Double area;
    private Integer price;
    private Integer capacity;
    private String img;
    private Integer level;
    private Double poolArea;
    private RentType rentType;
    private RoomType roomType;

    public BuildingDto() {
    }

    public BuildingDto(Integer id, String name, Double area, Integer price, Integer capacity, String img, Integer level, Double poolArea, RentType rentType, RoomType roomType) {
        this.id = id;
        this.name = name;
        this.area = area;
        this.price = price;
        this.capacity = capacity;
        this.img = img;
        this.level = level;
        this.poolArea = poolArea;
        this.rentType = rentType;
        this.roomType = roomType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getArea() {
        return area;
    }

    public void setArea(Double area) {
        this.area = area;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Double getPoolArea() {
        return poolArea;
    }

    public void setPoolArea(Double poolArea) {
        this.poolArea = poolArea;
    }

    public RentType getRentType() {
        return rentType;
    }

    public void setRentType(RentType rentType) {
        this.rentType = rentType;
    }

    public RoomType getRoomType() {
        return roomType;
    }

    public void setRoomType(RoomType roomType) {
        this.roomType = roomType;
    }
}
