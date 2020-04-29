package com.example.crud.demo.crudrest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ImageRepository extends CrudRepository<ImageEntity, Long> {

}
