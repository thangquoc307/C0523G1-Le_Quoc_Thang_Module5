package com.backendAPI.repository;

import com.backendAPI.model.employee.Department;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IDepartmentRepository extends JpaRepository<Department, Integer> {
    List<Department> findAllByIsDeleteIs(Integer isDelete);
}
