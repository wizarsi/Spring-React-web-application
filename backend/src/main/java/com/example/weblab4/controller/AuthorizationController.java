package com.example.weblab4.controller;

import com.example.weblab4.POJO.Requests.AuthRequest;
import com.example.weblab4.exceptions.UserAlreadyExistException;
import com.example.weblab4.exceptions.UserNotFoundException;
import com.example.weblab4.exceptions.UserWrongPasswordException;
import com.example.weblab4.services.auth.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/web-lab4/api/auth")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AuthorizationController {

   @Autowired
   private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthRequest user){
        try {
            userService.register(user);
            return ResponseEntity.ok("Вы зарегистрировались");
        }catch (UserAlreadyExistException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Произошла ошибка");
        }
    }



    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest user){
        try {
            return ResponseEntity.ok(userService.login(user));
        }catch (UserNotFoundException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }catch (UserWrongPasswordException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Произошла ошибка");
        }
    }

}
