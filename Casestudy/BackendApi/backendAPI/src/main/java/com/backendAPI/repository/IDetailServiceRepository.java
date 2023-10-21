package com.backendAPI.repository;

import com.backendAPI.model.contract.DetailService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDetailServiceRepository extends JpaRepository<DetailService, Integer> {
}
