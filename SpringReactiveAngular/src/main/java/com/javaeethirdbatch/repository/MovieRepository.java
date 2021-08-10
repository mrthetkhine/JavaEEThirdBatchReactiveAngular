package com.javaeethirdbatch.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.javaeethirdbatch.model.Movie;



@Repository
public interface MovieRepository extends ReactiveMongoRepository<Movie, String> {
	
}
