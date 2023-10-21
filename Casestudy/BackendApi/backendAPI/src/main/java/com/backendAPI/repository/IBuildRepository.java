package com.backendAPI.repository;

import com.backendAPI.model.build.Building;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBuildRepository extends JpaRepository<Building, Integer> {
}
