package com.javaeethirdbatch.model;

import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Data;

//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;

@Data
public class Movie {
	 	//@Id
	    private String id;

	    @NotBlank
	    @Size(max = 140)
	    private String name;
	    
	    @NotNull
	    private Integer year;

	    private String director;
	    
	    @NotNull
	    private Date createdAt = new Date();

		

}