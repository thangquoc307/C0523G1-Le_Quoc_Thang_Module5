package com.backendAPI.service;

import com.backendAPI.model.build.Building;
import com.backendAPI.model.build.RentType;
import com.backendAPI.model.build.RoomType;
import com.backendAPI.repository.IBuildRepository;
import com.backendAPI.repository.IRentTypeRepository;
import com.backendAPI.repository.IRoomTypeRepository;
import com.backendAPI.repository.IServiceRepository;
import com.sun.javafx.iio.gif.GIFImageLoaderFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuildService implements IBuildService{
    @Autowired
    private IBuildRepository buildRepository;
    @Autowired
    private IRentTypeRepository rentTypeRepository;
    @Autowired
    private IRoomTypeRepository roomTypeRepository;
    @Autowired
    private IServiceRepository serviceRepository;
    @Override
    public List<Building> getAllBuilding() {
        return buildRepository.findAllByIsDeleteIs(0);
    }
    @Override
    public void createBuilding(Building building) {
        building.setIsDelete(0);
        buildRepository.save(building);
    }
    @Override
    public void editBuilding(Building building) {
        if (building != null){
            if (building.getIsDelete() == 0){
                buildRepository.save(building);
            }
        }
    }
    @Override
    public void deleteBuilding(Integer buildId) {
        Building building = getBuildingById(buildId);
        if (building != null){
            if (building.getIsDelete() == 0){
                building.setIsDelete(1);
                buildRepository.save(building);
            }
        }
    }
    @Override
    public Building getBuildingById(Integer id) {
        return buildRepository.findById(id).get();
    }
    @Override
    public List<RentType> getAllRentType() {
        return rentTypeRepository.findAllByIsDeleteIs(0);
    }
    @Override
    public List<RoomType> getAllRoomType() {
        return roomTypeRepository.findAllByIsDeleteIs(0);
    }
    @Override
    public List<com.backendAPI.model.contract.Service> getAllService() {
        return serviceRepository.findAllByIsDeleteIs(0);
    }
}