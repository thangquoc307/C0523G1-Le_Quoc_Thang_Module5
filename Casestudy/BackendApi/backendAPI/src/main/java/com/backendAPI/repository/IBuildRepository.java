package com.backendAPI.repository;

import com.backendAPI.model.build.Building;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBuildRepository extends JpaRepository<Building, Integer> {
    List<Building> findAllByIsDeleteIs(Integer isDelete);
}
