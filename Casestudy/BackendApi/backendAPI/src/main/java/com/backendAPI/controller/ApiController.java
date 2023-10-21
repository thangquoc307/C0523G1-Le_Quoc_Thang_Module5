package com.backendAPI.controller;

import com.backendAPI.model.build.Building;
import com.backendAPI.model.customer.Customer;
import com.backendAPI.model.employee.Employee;
import com.backendAPI.service.IBuildService;
import com.backendAPI.service.ICustomerService;
import com.backendAPI.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/")
public class ApiController {
    @Autowired
    private IBuildService buildService;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IEmployeeService employeeService;
    @GetMapping("building")
    public ResponseEntity<List<Building>> getBuidingList(){
        List<Building> buildingList = buildService.getAllBuilding();
        if (buildingList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(buildingList, HttpStatus.OK);
        }
    }
    @GetMapping("customer")
    public ResponseEntity<List<Customer>> getCustomerList(){
        List<Customer> customerList = customerService.getAllCustomer();
        if (customerList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(customerList, HttpStatus.OK);
        }
    }
    @GetMapping("employee")
    public ResponseEntity<List<Employee>> getEmployeeList(){
        List<Employee> employeeList = employeeService.getAllEmployee();
        if (employeeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(employeeList, HttpStatus.OK);
        }
    }

}
