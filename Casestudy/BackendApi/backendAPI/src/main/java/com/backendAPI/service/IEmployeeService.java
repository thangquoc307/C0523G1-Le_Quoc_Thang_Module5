package com.backendAPI.service;

import com.backendAPI.model.employee.Department;
import com.backendAPI.model.employee.Education;
import com.backendAPI.model.employee.Employee;
import com.backendAPI.model.employee.Position;

import java.util.List;

public interface IEmployeeService {
    List<Employee> getAllEmployee();
    void createEmployee(Employee employee);
    void editEmployee(Employee employee);
    void deleteEmployeeById(Integer employeeId);
    Employee getEmployeeById(Integer employeeId);
    List<Education> getAllEducation();
    List<Position> getAllPosition();
    List<Department> getAllDepartment();
}
