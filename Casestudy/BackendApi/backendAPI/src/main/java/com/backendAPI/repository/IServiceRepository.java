package com.backendAPI.repository;

import com.backendAPI.model.contract.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IServiceRepository extends JpaRepository<Service, Integer> {
}
