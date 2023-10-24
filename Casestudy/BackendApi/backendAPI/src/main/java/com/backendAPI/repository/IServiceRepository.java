package com.backendAPI.repository;

import com.backendAPI.model.contract.Service;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IServiceRepository extends JpaRepository<Service, Integer> {
    List<Service> findAllByIsDeleteIs(Integer isDelete);
}
