package com.backendAPI.repository;

import com.backendAPI.model.customer.Gender;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IGenderRepository extends JpaRepository<Gender, Integer> {
    List<Gender> findAllByIsDeleteIs (Integer isDelete);
}
