package com.backendAPI.controller;

import com.backendAPI.dto.CustomerDto;
import com.backendAPI.dto.EmployeeDto;
import com.backendAPI.model.customer.Customer;
import com.backendAPI.model.employee.Employee;
import com.backendAPI.service.IBuildService;
import com.backendAPI.service.ICustomerService;
import com.backendAPI.service.IEmployeeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("api/create/")
public class ApiCreateController {
    @Autowired
    private IBuildService buildService;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IEmployeeService employeeService;
    @PostMapping("customer")
    public ResponseEntity<?> createCustomer(@RequestBody CustomerDto customerDto){
        if (customerDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            Customer customer = new Customer();
            BeanUtils.copyProperties(customerDto, customer);
            customerService.createCustomer(customer);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
    @PostMapping("employee")
    public ResponseEntity<?> createEmployee(@RequestBody EmployeeDto employeeDto){
        if (employeeDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            Employee employee = new Employee();
            BeanUtils.copyProperties(employeeDto, employee);
            employeeService.createEmployee(employee);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
}
