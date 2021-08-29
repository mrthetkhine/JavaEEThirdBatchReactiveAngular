package com.javaeethirdbatch.controller.rest;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javaeethirdbatch.dto.Token;
import com.javaeethirdbatch.model.User;
import com.javaeethirdbatch.service.UserService;


@RestController
@CrossOrigin	
public class AuthController {
	  @Autowired
	  private UserService userService;

	

	  @PostMapping("/login")
	  public Token login(@Valid @RequestBody User user) {
		Token token = new Token();
		String tok = userService.login(user.getUsername(), user.getPassword());
		token.setToken(tok);
	    return token;
	  }

	  @PostMapping("/register")
	  public String register(@Valid @RequestBody User user) {
	    return userService.register(user);
	  }
}
