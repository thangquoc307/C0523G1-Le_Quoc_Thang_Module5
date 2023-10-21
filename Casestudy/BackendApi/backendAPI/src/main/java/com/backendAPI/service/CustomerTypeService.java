package com.backendAPI.service;

import com.backendAPI.model.customer.Customer;
import com.backendAPI.model.customer.CustomerType;
import com.backendAPI.model.customer.Gender;
import com.backendAPI.repository.ICustomerRepository;
import com.backendAPI.repository.ICustomerTypeRepository;
import com.backendAPI.repository.IGenderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerTypeService implements ICustomerService {
    @Autowired
    private ICustomerRepository customerRepository;
    @Autowired
    private IGenderRepository genderRepository;
    @Autowired
    private ICustomerTypeRepository customerTypeRepository;
    @Override
    public List<Customer> getAllCustomer() {
        return customerRepository.findAll();
    }

    @Override
    public void createCustomer(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public void editCustomer(Customer customer) {
        if (customerRepository.findById(customer.getId()) != null){
            customerRepository.save(customer);
        }
    }

    @Override
    public void deleteCustomer(Integer customerId) {
        if (customerRepository.findById(customerId) != null){
            customerRepository.deleteById(customerId);
        }
    }

    @Override
    public Customer getCustomerById(Integer customerId) {
        return customerRepository.findById(customerId).get();
    }

    @Override
    public List<Gender> getAllGender() {
        return genderRepository.findAll();
    }

    @Override
    public List<CustomerType> getAllCustomerType() {
        return customerTypeRepository.findAll();
    }
}
