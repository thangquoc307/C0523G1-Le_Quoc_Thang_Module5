package com.backendAPI.repository;

import com.backendAPI.model.employee.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IEmployeeRepository extends JpaRepository<Employee, Integer> {
    List<Employee> findAllByIsDeleteIs(Integer isDelete);
}
