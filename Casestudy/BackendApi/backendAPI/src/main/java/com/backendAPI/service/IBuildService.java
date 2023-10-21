package com.backendAPI.service;

import com.backendAPI.model.build.Building;
import com.backendAPI.model.build.RentType;
import com.backendAPI.model.build.RoomType;
import com.backendAPI.model.contract.Service;

import java.util.List;

public interface IBuildService {
    List<Building> getAllBuilding();
    void createBuilding(Building building);
    void editBuilding(Building building);
    void deleteBuilding(Integer buildId);
    Building getBuildingById(Integer id);
    List<RentType> getAllRentType();
    List<RoomType> getAllRoomType();
    List<Service> getAllService();
}
