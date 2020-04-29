package com.example.crud.demo.crudrest;


import java.util.Map;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface StudentRepository extends CrudRepository<StudentEntity, Long>
{
	
//	public StudentEntity save(StudentEntity student);
//	public StudentEntity findOne(Long id);
//	public Map<Long, StudentEntity> findAll();
//	public String delete(Long id);
//
//	
	
}
