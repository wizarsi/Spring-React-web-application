package com.example.weblab4.services.entries;

import com.example.weblab4.POJO.Requests.CheckDotRequest;
import com.example.weblab4.entities.EntryEntity;
import com.example.weblab4.entities.UserEntity;
import com.example.weblab4.model.AreaChecker;
import com.example.weblab4.repositories.EntriesRepository;
import com.example.weblab4.services.auth.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntriesService {

    @Autowired
    private EntriesRepository entriesRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private AreaChecker areaChecker;

    public EntryEntity addDot(CheckDotRequest checkDotRequest, String username) {
        EntryEntity entryEntity = areaChecker.checkEntry(checkDotRequest);
        entryEntity.setUserEntity(userService.getUserByUsername(username));
        return entriesRepository.save(entryEntity);
    }

    public List<EntryEntity> getDots(String username) {
        UserEntity userEntity = userService.getUserByUsername(username);
        return entriesRepository.findAllByUserEntity(userEntity);
    }

}
