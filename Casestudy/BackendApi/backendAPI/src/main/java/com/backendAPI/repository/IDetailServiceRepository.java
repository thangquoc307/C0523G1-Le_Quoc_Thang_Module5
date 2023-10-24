package com.backendAPI.repository;

import com.backendAPI.model.contract.DetailService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IDetailServiceRepository extends JpaRepository<DetailService, Integer> {
    List<DetailService> findAllByIsDeleteIs(Integer isDelete);
}
