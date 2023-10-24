package com.backendAPI.repository;

import com.backendAPI.model.build.RentType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IRentTypeRepository extends JpaRepository<RentType, Integer> {
    List<RentType> findAllByIsDeleteIs(Integer isDelete);
}
