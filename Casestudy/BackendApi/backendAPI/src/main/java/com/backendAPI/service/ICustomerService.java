package com.backendAPI.service;

import com.backendAPI.model.customer.Customer;
import com.backendAPI.model.customer.CustomerType;
import com.backendAPI.model.customer.Gender;

import java.util.List;

public interface ICustomerService {
    List<Customer> getAllCustomer();
    void createCustomer(Customer customer);
    void editCustomer(Customer customer);
    void deleteCustomer(Integer customerId);
    Customer getCustomerById(Integer customerId);
    List<Gender> getAllGender();
    List<CustomerType> getAllCustomerType();
}
