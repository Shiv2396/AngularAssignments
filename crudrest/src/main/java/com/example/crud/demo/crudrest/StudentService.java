package com.example.crud.demo.crudrest;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class StudentService  {
	

	Map<Long,StudentEntity> empList = new HashMap<>();
	public StudentEntity save(StudentEntity student)
	{
		empList.put(student.getId(), student);
		
		return student;
	}
	
	public StudentEntity findOne(Long id)
	{
		return empList.get(id);
	}
	
	
	
	public Map<Long, StudentEntity> findAll()
	{
		return empList;
	}
	
	
	public String delete(Long id)
	{
		String flag="not delete";
		if(empList.containsKey(id))
		{
			empList.remove(id);
			flag="deleted";
		}	
		return flag;
	}
}
