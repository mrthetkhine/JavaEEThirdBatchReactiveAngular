package com.javaeethirdbatch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

@SpringBootApplication
//@EnableMongoRepositories
//@EnableReactiveMongoRepositories
public class SpringReactiveAngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringReactiveAngularApplication.class, args);
	}

}
