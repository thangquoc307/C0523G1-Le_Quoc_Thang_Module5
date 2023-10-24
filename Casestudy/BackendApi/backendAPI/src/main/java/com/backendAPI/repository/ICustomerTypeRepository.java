package com.backendAPI.repository;

import com.backendAPI.model.customer.CustomerType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICustomerTypeRepository extends JpaRepository<CustomerType, Integer> {
    List<CustomerType> findAllByIsDeleteIs(Integer isDelete);
}
