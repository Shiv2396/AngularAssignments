package com.example.crud.demo.crudrest;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImageController {
	
	@Autowired
	ImageRepository imageRepo;
	
	
	
	//create
	@RequestMapping(value="/image", method=RequestMethod.POST)
	public ImageEntity createImage(@RequestBody ImageEntity image)
	{
		
		
		return imageRepo.save(image);
	}
	
	
	
	//read by id
	@RequestMapping(value="/image/{id}", method=RequestMethod.GET)
	public Optional<ImageEntity> getImageById(@PathVariable Long id)
	{
		
		return imageRepo.findById(id);
	}
	
	
	//read all
	@RequestMapping(value="/images", method=RequestMethod.GET)
	public Iterable<ImageEntity> findAll()
	{
		return imageRepo.findAll();
	}
	

	//update
	@RequestMapping(value="/image/{id}", method=RequestMethod.PUT)
	public ImageEntity updateImage(@RequestBody ImageEntity image, @PathVariable long id)
	{
		Optional<ImageEntity> imageOptional = imageRepo.findById(id);
		if (!imageOptional.isPresent())
			return null;

		image.setId(id);
		return imageRepo.save(image);
	}
	
	
	//delete
	@RequestMapping(value="/image/{id}", method=RequestMethod.DELETE)
	public void deleteImage(@PathVariable Long id)
	{
		imageRepo.deleteById(id);
	}
	


}
