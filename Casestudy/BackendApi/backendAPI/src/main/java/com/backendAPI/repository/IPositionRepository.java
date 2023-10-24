package com.backendAPI.repository;

import com.backendAPI.model.employee.Position;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IPositionRepository extends JpaRepository<Position, Integer> {
    List<Position> findAllByIsDeleteIs(Integer isDelete);
}
