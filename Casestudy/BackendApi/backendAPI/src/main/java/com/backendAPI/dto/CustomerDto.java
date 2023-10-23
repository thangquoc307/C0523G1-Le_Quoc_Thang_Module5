package com.backendAPI.dto;

import com.backendAPI.model.contract.Contract;
import com.backendAPI.model.customer.CustomerType;
import com.backendAPI.model.customer.Gender;
import java.time.LocalDate;
import java.util.List;

public class CustomerDto {
    private String name;
    private LocalDate birthday;
    private String idCard;
    private String phone;
    private String email;
    private String address;
    private Gender gender;
    private CustomerType customerType;
    private List<Contract> contracts;

    public CustomerDto() {
    }

    public CustomerDto(String name, LocalDate birthday, String idCard, String phone, String email, String address, Gender gender, CustomerType customerType, List<Contract> contracts) {
        this.name = name;
        this.birthday = birthday;
        this.idCard = idCard;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.gender = gender;
        this.customerType = customerType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }
}
