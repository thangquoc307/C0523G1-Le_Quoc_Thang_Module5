package com.backendAPI.dto;

import com.backendAPI.model.employee.Department;
import com.backendAPI.model.employee.Education;
import com.backendAPI.model.employee.Position;
import java.time.LocalDate;

public class EmployeeDto {
    private Integer id;
    private String name;
    private LocalDate birthday;
    private String idCard;
    private String phone;
    private String email;
    private Integer salary;
    private Education education;
    private Position position;
    private Department department;

    public EmployeeDto() {
    }

    public EmployeeDto(Integer id, String name, LocalDate birthday, String idCard, String phone, String email, Integer salary, Education education, Position position, Department department) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.idCard = idCard;
        this.phone = phone;
        this.email = email;
        this.salary = salary;
        this.education = education;
        this.position = position;
        this.department = department;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }

    public Education getEducation() {
        return education;
    }

    public void setEducation(Education education) {
        this.education = education;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
