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
        return customerRepository.findAllByIsDeleteIs(0);
    }

    @Override
    public void createCustomer(Customer customer) {
        customer.setIsDelete(0);
        customerRepository.save(customer);
    }

    @Override
    public void editCustomer(Customer customer) {
        if (customer != null){
            if (customer.getIsDelete() == 0){
                customerRepository.save(customer);
            }
        }
    }

    @Override
    public void deleteCustomer(Integer customerId) {
        Customer customer = getCustomerById(customerId);
        if (customer != null) {
            if (customer.getIsDelete() == 0){
                customer.setIsDelete(1);
                customerRepository.save(customer);
            }
        }
    }

    @Override
    public Customer getCustomerById(Integer customerId) {
        return customerRepository.findById(customerId).get();
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
