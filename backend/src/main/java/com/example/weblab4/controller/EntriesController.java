package com.example.weblab4.controller;

import com.example.weblab4.POJO.Requests.CheckDotRequest;
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
    private EntriesService entriesService;

    @PostMapping("/check")
    public ResponseEntity<?> checkDot(@RequestBody CheckDotRequest checkDotRequest, Principal principal){
        return ResponseEntity.ok(entriesService.addDot(checkDotRequest,principal.getName()));
    }

    @GetMapping("/getEntries")
    public ResponseEntity<?> getEntries( Principal principal){
        System.out.println(entriesService.getDots(principal.getName()).get(0));
        return null;
    }
}
