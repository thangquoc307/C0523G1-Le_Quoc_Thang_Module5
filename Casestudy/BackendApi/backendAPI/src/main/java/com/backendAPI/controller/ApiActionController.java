package com.backendAPI.controller;

import com.backendAPI.dto.*;
import com.backendAPI.model.build.Building;
import com.backendAPI.model.contract.Contract;
import com.backendAPI.model.customer.Customer;
import com.backendAPI.model.employee.Employee;
import com.backendAPI.service.IBuildService;
import com.backendAPI.service.IContractService;
import com.backendAPI.service.ICustomerService;
import com.backendAPI.service.IEmployeeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("api/")
public class ApiActionController {
    @Autowired
    private IBuildService buildService;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private IEmployeeService employeeService;
    @Autowired
    private IContractService contractService;
    @PostMapping("create/customer")
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
    @PostMapping("create/employee")
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
    @PostMapping("create/building")
    public ResponseEntity<?> createBuilding(@RequestBody BuildingDto buildingDto){
        if (buildingDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            Building building = new Building();
            BeanUtils.copyProperties(buildingDto, building);
            buildService.createBuilding(building);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
    @PostMapping("create/contract")
    public ResponseEntity<?> createContract(@RequestBody ContractDto contractDto){
        if (contractDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            Contract contract = new Contract();
            BeanUtils.copyProperties(contractDto, contract);
            contractService.createContract(contract);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
    @PostMapping("delete")
    public ResponseEntity<?> deleteElement(@RequestBody ObjectDelete objectDelete){
        String type = objectDelete.getObjectType();
        int id = objectDelete.getId();
        switch (type){
            case "building":
                buildService.deleteBuilding(id);
                break;
            case "customer":
                customerService.deleteCustomer(id);
                break;
            case "employee":
                employeeService.deleteEmployeeById(id);
                break;
            case "contract":
                contractService.deleteContract(id);
                break;
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PatchMapping("edit/employee")
    public ResponseEntity<?> editEmployee(@RequestBody EmployeeDto employeeDto){
        if (employeeDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            Employee employee = new Employee();
            BeanUtils.copyProperties(employeeDto, employee);
            employeeService.createEmployee(employee);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
    @PatchMapping("edit/customer")
    public ResponseEntity<?> editCustomer(@RequestBody CustomerDto customerDto){
        if (customerDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            Customer customer = new Customer();
            BeanUtils.copyProperties(customerDto, customer);
            customerService.createCustomer(customer);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
    @PatchMapping("edit/building")
    public ResponseEntity<?> editBuilding(@RequestBody BuildingDto buildingDto){
        if (buildingDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            Building building = new Building();
            BeanUtils.copyProperties(buildingDto, building);
            buildService.createBuilding(building);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
    @PatchMapping("edit/contract")
    public ResponseEntity<?> editContract(@RequestBody ContractDto contractDto){
        if (contractDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            Contract contract = new Contract();
            BeanUtils.copyProperties(contractDto, contract);
            contractService.createContract(contract);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
}
