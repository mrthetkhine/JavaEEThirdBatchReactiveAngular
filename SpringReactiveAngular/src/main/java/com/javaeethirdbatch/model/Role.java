package com.javaeethirdbatch.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;


public class Role implements GrantedAuthority {
 

  public String getAuthority() {
    return this.role;
  }
  @Id
  private String id;
  

  private String role;

  public String getId() {
      return id;
  }

  public void setId(String id) {
      this.id = id;
  }

  public String getRole() {
      return role;
  }

  public void setRole(String role) {
      this.role = role;
  }


}
