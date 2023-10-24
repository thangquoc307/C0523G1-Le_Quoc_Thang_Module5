package com.backendAPI.service;

import com.backendAPI.model.employee.Department;
import com.backendAPI.model.employee.Education;
import com.backendAPI.model.employee.Employee;
import com.backendAPI.model.employee.Position;
import com.backendAPI.repository.IDepartmentRepository;
import com.backendAPI.repository.IEducationRepository;
import com.backendAPI.repository.IEmployeeRepository;
import com.backendAPI.repository.IPositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements IEmployeeService{
    @Autowired
    private IEmployeeRepository employeeRepository;
    @Autowired
    private IEducationRepository educationRepository;
    @Autowired
    private IPositionRepository positionRepository;
    @Autowired
    private IDepartmentRepository departmentRepository;
    @Override
    public List<Employee> getAllEmployee() {
        return employeeRepository.findAllByIsDeleteIs(0);
    }

    @Override
    public void createEmployee(Employee employee) {
        employee.setIsDelete(0);
        employeeRepository.save(employee);
    }

    @Override
    public void editEmployee(Employee employee) {
        if (employee != null) {
            if (employee.getIsDelete() == 0) {
                employeeRepository.save(employee);
            }
        }
    }

    @Override
    public void deleteEmployeeById(Integer employeeId) {
        Employee employee = getEmployeeById(employeeId);
        if (employee != null) {
            if (employee.getIsDelete() == 0){
                employee.setIsDelete(1);
                employeeRepository.save(employee);
            }
        }
    }

    @Override
    public Employee getEmployeeById(Integer employeeId) {
        return employeeRepository.findById(employeeId).get();
    }

    @Override
    public List<Education> getAllEducation() {
        return educationRepository.findAllByIsDeleteIs(0);
    }

    @Override
    public List<Position> getAllPosition() {
        return positionRepository.findAllByIsDeleteIs(0);
    }

    @Override
    public List<Department> getAllDepartment() {
        return departmentRepository.findAllByIsDeleteIs(0);
    }
}
