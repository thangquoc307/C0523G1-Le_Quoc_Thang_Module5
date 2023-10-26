package com.backendAPI.repository;

import com.backendAPI.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    List<Customer> findAllByIsDeleteIsAndNameContains (Integer isDelete, String name);
    List<Customer> findAllByIsDeleteIsAndNameContainsAndCustomerType_Id (Integer isDelete, String name, Integer type);
    List<Customer> findAllByIsDeleteIs (Integer isDelete);
}
