package com.backendAPI.repository;

import com.backendAPI.model.employee.Education;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IEducationRepository extends JpaRepository<Education, Integer> {
}
