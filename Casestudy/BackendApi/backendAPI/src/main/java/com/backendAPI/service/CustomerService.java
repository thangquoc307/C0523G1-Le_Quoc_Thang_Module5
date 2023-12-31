package com.backendAPI.service;

import com.backendAPI.model.customer.Customer;
import com.backendAPI.model.customer.CustomerType;
import com.backendAPI.model.customer.Gender;
import com.backendAPI.repository.ICustomerRepository;
import com.backendAPI.repository.ICustomerTypeRepository;
import com.backendAPI.repository.IGenderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private ICustomerRepository customerRepository;
    @Autowired
    private IGenderRepository genderRepository;
    @Autowired
    private ICustomerTypeRepository customerTypeRepository;
    @Override
    public List<Customer> getAllCustomer() {
        return customerRepository.findAllByIsDeleteIs(0);
    }
    @Override
    public Page<Customer> searchCustomer(String name, Pageable pageable) {
        return customerRepository.findAllByIsDeleteIsAndNameContains(pageable,0, name);
    }

    @Override
    public Page<Customer> searchCustomerAndTypePageable(String name, Integer type, Pageable pageable) {
        return customerRepository.findAllByIsDeleteIsAndNameContainsAndCustomerType_Id(pageable, 0, name, type);
    }

    @Override
    public void createCustomer(Customer customer) {
        customer.setIsDelete(0);
        customerRepository.save(customer);
    }

    @Override
    public void editCustomer(Customer customer) {
        Customer check = getCustomerById(customer.getId());
        if (check != null){
            customerRepository.save(customer);
        }
    }

    @Override
    public void deleteCustomer(Integer customerId) {
        Customer customer = getCustomerById(customerId);
        if (customer != null) {
            customer.setIsDelete(1);
            customerRepository.save(customer);
        }
    }

    @Override
    public Customer getCustomerById(Integer customerId) {
        Customer customer = customerRepository.findById(customerId).get();
        if (customer != null) {
            return customer;
        }
        return null;
    }

    @Override
    public List<Gender> getAllGender() {
        return genderRepository.findAllByIsDeleteIs(0);
    }

    @Override
    public List<CustomerType> getAllCustomerType() {
        return customerTypeRepository.findAllByIsDeleteIs(0);
    }
}
