package com.backendAPI.repository;

import com.backendAPI.model.employee.Education;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IEducationRepository extends JpaRepository<Education, Integer> {
    List<Education> findAllByIsDeleteIs(Integer isDelete);
}
