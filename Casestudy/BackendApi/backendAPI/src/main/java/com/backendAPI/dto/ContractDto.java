package com.backendAPI.dto;

import com.backendAPI.model.build.Building;
import com.backendAPI.model.customer.Customer;
import com.backendAPI.model.employee.Employee;

import java.time.LocalDate;

public class ContractDto {
    private Integer id;
    private String code;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private Integer deposit;
    private Integer payment;
    private Building building;
    private Customer customer;
    private Employee employee;

    public ContractDto() {
    }

    public ContractDto(Integer id, String code, LocalDate checkInDate, LocalDate checkOutDate, Integer deposit, Integer payment, Building building, Customer customer, Employee employee) {
        this.id = id;
        this.code = code;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.deposit = deposit;
        this.payment = payment;
        this.building = building;
        this.customer = customer;
        this.employee = employee;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public LocalDate getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(LocalDate checkInDate) {
        this.checkInDate = checkInDate;
    }

    public LocalDate getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(LocalDate checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public Integer getDeposit() {
        return deposit;
    }

    public void setDeposit(Integer deposit) {
        this.deposit = deposit;
    }

    public Integer getPayment() {
        return payment;
    }

    public void setPayment(Integer payment) {
        this.payment = payment;
    }

    public Building getBuilding() {
        return building;
    }

    public void setBuilding(Building building) {
        this.building = building;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}
