package com.example.crud.demo.crudrest;

import java.util.Iterator;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {

	@Autowired
	StudentRepository studentRepo;
	
	//create
	@RequestMapping(value="/student", method=RequestMethod.POST)
	public StudentEntity createStudent(@RequestBody StudentEntity student)
	{
		
		
		return studentRepo.save(student);
	}
	
	
	
	//read by id
	@RequestMapping(value="/student/{id}", method=RequestMethod.GET)
	public Optional<StudentEntity> getStudentById(@PathVariable Long id)
	{
		
		return studentRepo.findById(id);
	}
	
	
	//read all
	@RequestMapping(value="/students", method=RequestMethod.GET)
	public Iterable<StudentEntity> findAll()
	{
		return studentRepo.findAll();
	}
	
	
	//update
	@RequestMapping(value="/student", method=RequestMethod.PUT)
	public StudentEntity updateStudent(@RequestBody StudentEntity student)
	{
		return studentRepo.save(student);
	}
	
	
	//delete
	@RequestMapping(value="/student/{id}", method=RequestMethod.DELETE)
	public void deleteStudent(@PathVariable Long id)
	{
		studentRepo.deleteById(id);;
	}
}
