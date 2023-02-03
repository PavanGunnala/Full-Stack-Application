package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Employee;
import com.example.demo.service.EmployeeService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/v1")
public class EmployeeController {
	@Autowired
	private EmployeeService service;
	
	@PostMapping("/add")
	public Employee register(@RequestBody Employee emp) {
		
		return this.service.addEmployee(emp);
	}
	
	@GetMapping("/employees")
	public List<Employee> showEmployees(){
		return this.service.getEmployees();
	}
	@PutMapping("/update")
	public Employee modify(@RequestBody Employee emp) {
		return this.service.updateEmployee(emp);
	}
	
	@DeleteMapping("/del")
	public String remove(@RequestBody Employee emp) {
		return this.service.deleteEmployee(emp);
	}
	@GetMapping("/employee/{id}")
	public Optional<Employee> getEmployeeById(@PathVariable int id) {
		return this.service.showEmployeeById(id);
	}
	

}
