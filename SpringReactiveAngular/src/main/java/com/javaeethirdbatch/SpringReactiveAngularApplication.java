package com.javaeethirdbatch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

//@EnableScheduling
@SpringBootApplication
@EnableMongoRepositories
@EnableReactiveMongoRepositories
public class SpringReactiveAngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringReactiveAngularApplication.class, args);
	}

}
