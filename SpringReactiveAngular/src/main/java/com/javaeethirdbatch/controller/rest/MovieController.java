package com.javaeethirdbatch.controller.rest;

import static org.hamcrest.CoreMatchers.startsWith;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javaeethirdbatch.model.Movie;
import com.javaeethirdbatch.repository.MovieRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;



@RestController
@RequestMapping("api/movies")
@CrossOrigin
public class MovieController {

	@Autowired
    private MovieRepository movieRepository;
	
	@Autowired
	private MongoTemplate mongoTemplate;
	
	//MongoRepository repo;
	
	@GetMapping
    public Flux<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

	@GetMapping("/searchByName")
    public Flux<Movie> getMovieByName(@RequestParam String movieName) {
		System.out.println("Movie name "+movieName);
		
		Movie movie = new Movie();
		movie.setName(movieName);
		
		//ExampleMatcher matcher = ExampleMatcher.matchingAny();
		Example<Movie> example = Example.of(movie);
        
		return movieRepository.findAll(example);
    }
	@GetMapping("/searchByDirector")
    public List<Movie> searchByDirector(@RequestParam String director) {
		System.out.println("Director"+director);
		
		Query query = new Query(Criteria.where("director").is(director));
        
		List<Movie> movies = this.mongoTemplate.find(query, Movie.class);
		
		return movies;
    }
	
    @PostMapping
    public Mono<Movie> createMoview(@Valid @RequestBody Movie movie) {
        return movieRepository.save(movie);
    }
    @GetMapping("/{id}")
    public Mono<ResponseEntity<Movie>> getMovieById(@PathVariable(value = "id") String movieId) {
        return movieRepository.findById(movieId)
                .map(savedMovie -> ResponseEntity.ok(savedMovie))
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }
    @PutMapping("/{id}")
    public Mono<ResponseEntity<Movie>> updateMovie(@PathVariable(value = "id") String movieId,
                                                   @Valid @RequestBody Movie movie) {
        return movieRepository.findById(movieId)
                .flatMap(existingMovie -> {
                    existingMovie.setName(movie.getName());
                    existingMovie.setDirector(movie.getDirector());
                    existingMovie.setYear(movie.getYear());
                    return movieRepository.save(existingMovie);
                })
                .map(updatedMovie -> new ResponseEntity<>(updatedMovie, HttpStatus.OK))
                .defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @DeleteMapping("/{id}")
    public Mono<ResponseEntity<Void>> deleteMovie(@PathVariable(value = "id") String movieId) {

        return movieRepository.findById(movieId)
                .flatMap(existingMovie ->
                			movieRepository.delete(existingMovie)
                            			   .then(Mono.just(new ResponseEntity<Void>(HttpStatus.OK)))
                )
                .defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    // Movies are Sent to the client as Server Sent Events
    @CrossOrigin
    @GetMapping(value = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Movie> streamMovie() {
        return movieRepository.findAll();
    }

}
