package com.example.weblab4.model;

import com.example.weblab4.POJO.Requests.CheckDotRequest;
import com.example.weblab4.entities.DotEntity;
import com.example.weblab4.services.auth.UserService;
import com.example.weblab4.services.entries.EntriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DotsManager implements DotsManaging{

    @Autowired
    private EntriesService entriesService;

    @Autowired
    private UserService userService;

    @Autowired
    private AreaChecker areaChecker;

    @Override
    public DotEntity addDot(CheckDotRequest checkDotRequest, String username) {
        DotEntity dotEntity = areaChecker.checkEntry(checkDotRequest);
        System.out.println("username");
        dotEntity.setUserEntity(userService.getUserByUsername(username));
        System.out.println("entity");
        return entriesService.saveEntry(dotEntity);
    }

}
