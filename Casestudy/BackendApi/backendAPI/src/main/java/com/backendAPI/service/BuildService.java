package com.backendAPI.service;

import com.backendAPI.model.build.Building;
import com.backendAPI.model.build.RentType;
import com.backendAPI.model.build.RoomType;
import com.backendAPI.repository.IBuildRepository;
import com.backendAPI.repository.IRentTypeRepository;
import com.backendAPI.repository.IRoomTypeRepository;
import com.backendAPI.repository.IServiceRepository;
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
        return buildRepository.findAll();
    }
    @Override
    public void createBuilding(Building building) {
        buildRepository.save(building);
    }
    @Override
    public void editBuilding(Building building) {
        if (buildRepository.findById(building.getId()) != null){
            buildRepository.save(building);
        }
    }
    @Override
    public void deleteBuilding(Integer buildId) {
        if (buildRepository.findById(buildId) != null){
            buildRepository.deleteById(buildId);
        }
    }
    @Override
    public Building getBuildingById(Integer id) {
        return buildRepository.findById(id).get();
    }
    @Override
    public List<RentType> getAllRentType() {
        return rentTypeRepository.findAll();
    }
    @Override
    public List<RoomType> getAllRoomType() {
        return roomTypeRepository.findAll();
    }
    @Override
    public List<com.backendAPI.model.contract.Service> getAllService() {
        return serviceRepository.findAll();
    }
}