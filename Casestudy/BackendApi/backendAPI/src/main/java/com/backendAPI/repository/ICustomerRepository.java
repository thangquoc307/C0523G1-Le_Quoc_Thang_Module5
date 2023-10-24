package com.backendAPI.repository;

import com.backendAPI.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    List<Customer> findAllByIsDeleteIs (Integer isDelete);
}
