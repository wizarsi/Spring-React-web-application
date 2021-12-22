package com.example.weblab4.controller;

import com.example.weblab4.POJO.Requests.AuthRequest;
import com.example.weblab4.exceptions.EmptyFieldException;
import com.example.weblab4.exceptions.UserAlreadyExistException;
import com.example.weblab4.services.auth.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/web-lab4/api/auth")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AuthorizationController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody AuthRequest user) {
        try {
            userService.register(user);
            return ResponseEntity.ok("Вы зарегистрировались");
        } catch (UserAlreadyExistException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибка");
        }
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody AuthRequest user,BindingResult bindingResult) {
        try {
            return ResponseEntity.ok(userService.login(user));
        } catch (BadCredentialsException e){
            return ResponseEntity.badRequest().body("Wrong login or password");
        } catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
