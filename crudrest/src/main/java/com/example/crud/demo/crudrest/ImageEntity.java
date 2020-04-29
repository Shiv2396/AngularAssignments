package com.example.crud.demo.crudrest;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class ImageEntity {
	
	@Id 
	@GeneratedValue
	private long id;
	private String name;
	private String category;
	private String url;
	private Date createdDate;
	public ImageEntity() {
		super();
	}
	public ImageEntity(long id, String name, String category, String url, Date createdDate) {
		super();
		this.id = id;
		this.name = name;
		this.category = category;
		this.url = url;
		this.createdDate = createdDate;
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
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Date getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	@Override
	public String toString() {
		return "ImageEntity [id=" + id + ", name=" + name + ", category=" + category + ", url=" + url + ", createdDate="
				+ createdDate + "]";
	}

	
	
}
