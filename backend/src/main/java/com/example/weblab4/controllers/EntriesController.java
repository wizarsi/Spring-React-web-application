package com.example.weblab4.controllers;

import com.example.weblab4.POJO.Requests.CheckDotRequest;
import com.example.weblab4.services.entries.EntriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/web-lab4/api/entries")
@CrossOrigin(origins = "*", maxAge = 3600)
public class EntriesController {

    private final EntriesService entriesService;

    @Autowired
    public EntriesController(EntriesService entriesService) {
        this.entriesService = entriesService;
    }

    @PostMapping("/check")
    public String getApp(@RequestBody CheckDotRequest checkDotRequest){
        return entriesService.checkEntry(checkDotRequest).toString();
    }
}
