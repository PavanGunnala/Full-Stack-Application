package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeRepo;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepo repo;
	
	public Employee addEmployee(Employee emp) {
		return this.repo.save(emp);
	}
	
	public List<Employee> getEmployees(){
		return this.repo.findAll();
	}
	public Employee updateEmployee(Employee newEmp) {
		return this.repo.save(newEmp);
	}
	public String deleteEmployee(Employee emp) {
		 this.repo.delete(emp);
		 return "Employee Deleted";
	}
	
	public Optional<Employee> showEmployeeById(int id) {
		return this.repo.findById(id);
	}
}
