package com.backendAPI.service;

import com.backendAPI.model.customer.Customer;
import com.backendAPI.model.customer.CustomerType;
import com.backendAPI.model.customer.Gender;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICustomerService {
    List<Customer> getAllCustomer();
    Page<Customer> searchCustomer(String name, Pageable pageable);
    Page<Customer> searchCustomerAndTypePageable(String name, Integer type, Pageable pageable);
    void createCustomer(Customer customer);
    void editCustomer(Customer customer);
    void deleteCustomer(Integer customerId);
    Customer getCustomerById(Integer customerId);
    List<Gender> getAllGender();
    List<CustomerType> getAllCustomerType();
}
