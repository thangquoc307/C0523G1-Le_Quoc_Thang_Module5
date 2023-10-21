package com.backendAPI.repository;

import com.backendAPI.model.customer.Gender;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IGenderRepository extends JpaRepository<Gender, Integer> {
}
