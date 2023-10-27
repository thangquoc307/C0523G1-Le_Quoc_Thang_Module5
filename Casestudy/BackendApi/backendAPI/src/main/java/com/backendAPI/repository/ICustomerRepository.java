package com.backendAPI.repository;

import com.backendAPI.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    Page<Customer> findAllByIsDeleteIsAndNameContains (Pageable pageable, Integer isDelete, String name);
    Page<Customer> findAllByIsDeleteIsAndNameContainsAndCustomerType_Id (Pageable pageable, Integer isDelete, String name, Integer type);
    List<Customer> findAllByIsDeleteIs (Integer isDelete);
}
