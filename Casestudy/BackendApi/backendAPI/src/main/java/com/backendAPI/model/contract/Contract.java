package com.backendAPI.model.contract;

import com.backendAPI.model.build.Building;
import com.backendAPI.model.customer.Customer;
import com.backendAPI.model.employee.Employee;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "contracts")
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique = false)
    private String code;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private Integer deposit;
    private Integer payment;
    @Column(name = "is_delete",columnDefinition = "integer default 0")
    private Integer isDelete;
    @ManyToOne
    @JoinColumn(name = "buildingId", referencedColumnName = "id")
    private Building building;
    @ManyToOne
    @JoinColumn(name = "customerId", referencedColumnName = "id")
    private Customer customer;
    @ManyToOne
    @JoinColumn(name = "employeeId", referencedColumnName = "id")
    private Employee employee;

    @JsonBackReference
    @OneToMany(mappedBy = "contract")
    private List<DetailService> detailServices;

    public Contract() {
    }

    public Integer getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Integer isDelete) {
        this.isDelete = isDelete;
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

    public List<DetailService> getDetailServices() {
        return detailServices;
    }

    public void setDetailServices(List<DetailService> detailServices) {
        this.detailServices = detailServices;
    }

}
