package com.security.springboot.models;

public class AuthenticationResponse {
private String response;

public AuthenticationResponse() {
	
}
public AuthenticationResponse(String response) {
	this.response=response;
}

public String getResponse() {
	return response;
}

public void setResponse(String response) {
	this.response = response;
}


}
