package com.backendAPI.controller;

import com.backendAPI.model.build.Building;
import com.backendAPI.model.build.RentType;
import com.backendAPI.model.build.RoomType;
import com.backendAPI.model.contract.Service;
import com.backendAPI.model.customer.Customer;
import com.backendAPI.model.customer.CustomerType;
import com.backendAPI.model.customer.Gender;
import com.backendAPI.model.employee.Department;
import com.backendAPI.model.employee.Education;
import com.backendAPI.model.employee.Employee;
import com.backendAPI.model.employee.Position;
import com.backendAPI.service.IBuildService;
import com.backendAPI.service.ICustomerService;
import com.backendAPI.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/")
public class ApiDisplayController {
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
    @GetMapping("renttype")
    public ResponseEntity<List<RentType>> getRentType(){
        List<RentType> rentTypeList = buildService.getAllRentType();
        if (rentTypeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(rentTypeList, HttpStatus.OK);
        }
    }
    @GetMapping("roomtype")
    public ResponseEntity<List<RoomType>> getRoomType(){
        List<RoomType> roomTypeList = buildService.getAllRoomType();
        if (roomTypeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(roomTypeList, HttpStatus.OK);
        }
    }
    @GetMapping("service")
    public ResponseEntity<List<Service>> getService(){
        List<Service> serviceList = buildService.getAllService();
        if (serviceList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(serviceList, HttpStatus.OK);
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
    @GetMapping("customertype")
    public ResponseEntity<List<CustomerType>> getCustomerType(){
        List<CustomerType> customerTypeList = customerService.getAllCustomerType();
        if (customerTypeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(customerTypeList, HttpStatus.OK);
        }
    }
    @GetMapping("gender")
    public ResponseEntity<List<Gender>> getGender(){
        List<Gender> genderList = customerService.getAllGender();
        if (genderList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(genderList, HttpStatus.OK);
        }
    }
    @GetMapping("department")
    public ResponseEntity<List<Department>> getDepartment(){
        List<Department> departmentList = employeeService.getAllDepartment();
        if (departmentList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(departmentList, HttpStatus.OK);
        }
    }
    @GetMapping("education")
    public ResponseEntity<List<Education>> getEducation(){
        List<Education> educationList = employeeService.getAllEducation();
        if (educationList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(educationList, HttpStatus.OK);
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
    @GetMapping("position")
    public ResponseEntity<List<Position>> getPosition(){
        List<Position> positionList = employeeService.getAllPosition();
        if (positionList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(positionList, HttpStatus.OK);
        }
    }
    @GetMapping("customer/{id}")
    public ResponseEntity<Customer> getCustomer(@PathVariable int id){
        Customer customer = customerService.getCustomerById(id);
        if (customer == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(customer, HttpStatus.OK);
        }
    }
    @GetMapping("employee/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable int id){
        Employee employee = employeeService.getEmployeeById(id);
        if (employee == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(employee, HttpStatus.OK);
        }
    }
    @GetMapping("building/{id}")
    public ResponseEntity<Building> getBuilding(@PathVariable int id){
        Building building = buildService.getBuildingById(id);
        if (building == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(building, HttpStatus.OK);
        }
    }
}
