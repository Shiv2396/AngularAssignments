package com.example.crud.demo.crudrest;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class StudentEntity 
{
	@Id
	private long id;
	private String name;
	private int age;
	public StudentEntity(long id, String name, int age) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
	}
	public StudentEntity() {
		super();
		
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	@Override
	public String toString() {
		return "StudentEntity [id=" + id + ", name=" + name + ", age=" + age + "]";
	}
	
	

}
