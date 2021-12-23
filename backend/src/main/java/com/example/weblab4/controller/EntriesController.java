package com.example.weblab4.controller;

import com.example.weblab4.POJO.Requests.CheckDotRequest;
import com.example.weblab4.entities.EntryEntity;
import com.example.weblab4.exceptions.NotIncludedInTheRangeException;
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
        try {
            return ResponseEntity.ok(entriesService.
                    addDot(checkDotRequest, principal.getName()));
        }catch (NotIncludedInTheRangeException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/getEntries")
    public ResponseEntity<?> getEntries( Principal principal){
        return ResponseEntity.ok(entriesService.getDots(principal.getName()));
    }

    @GetMapping("/getEntriesForGraph")
    public ResponseEntity<?> getEntries(@RequestParam("r") float r, Principal principal){
        return ResponseEntity.ok(entriesService.getUpdateRDots(r,principal.getName()));
    }

    @DeleteMapping("/clearEntries")
    public ResponseEntity<?> clearEntries( Principal principal){
        return ResponseEntity.ok(entriesService.deleteDots(principal.getName()));
    }

}
