package com.example.weblab4.controller;

import com.example.weblab4.POJO.Requests.CheckDotRequest;
import com.example.weblab4.model.DotsManaging;
import com.example.weblab4.services.entries.EntriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/web-lab4/api/entries")
@CrossOrigin(origins = "*", maxAge = 3600)
public class EntriesController {

    @Autowired
    private DotsManaging dotsManaging;

    @PostMapping("/check")
    public ResponseEntity<?> getApp(@RequestBody CheckDotRequest checkDotRequest, Principal principal){
        System.out.println(principal.getName());
        return ResponseEntity.ok(dotsManaging.addDot(checkDotRequest,principal.getName()));
    }
}
