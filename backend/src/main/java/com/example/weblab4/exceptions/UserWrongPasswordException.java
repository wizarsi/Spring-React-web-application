package com.example.weblab4.exceptions;

public class UserWrongPasswordException extends Exception{
    public UserWrongPasswordException(String message) {
        super(message);
    }
}
