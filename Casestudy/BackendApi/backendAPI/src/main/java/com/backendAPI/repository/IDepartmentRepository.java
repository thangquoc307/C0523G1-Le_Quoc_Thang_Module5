package com.backendAPI.repository;

import com.backendAPI.model.employee.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDepartmentRepository extends JpaRepository<Department, Integer> {
}
