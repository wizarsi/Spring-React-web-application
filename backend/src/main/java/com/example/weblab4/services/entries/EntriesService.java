package com.example.weblab4.services.entries;

import com.example.weblab4.POJO.Requests.CheckDotRequest;
import com.example.weblab4.POJO.Responses.MessageResponse;
import com.example.weblab4.entities.EntryEntity;
import com.example.weblab4.entities.UserEntity;
import com.example.weblab4.exceptions.NotIncludedInTheRangeException;
import com.example.weblab4.model.AreaChecker;
import com.example.weblab4.repositories.EntriesRepository;
import com.example.weblab4.services.auth.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class EntriesService {

    @Autowired
    private EntriesRepository entriesRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private AreaChecker areaChecker;

    public EntryEntity addDot(CheckDotRequest checkDotRequest, String username) throws NotIncludedInTheRangeException {
        EntryEntity entryEntity = areaChecker.checkEntry(checkDotRequest);
        entryEntity.setUserEntity(userService.getUserByUsername(username));
        return entriesRepository.save(entryEntity);
    }

    public List<EntryEntity> getDots(String username) {
        UserEntity userEntity = userService.getUserByUsername(username);
        List<EntryEntity> entries =entriesRepository.findAllByUserEntity(userEntity);
        Collections.sort(entries,
                new Comparator<EntryEntity>() {
                    @Override
                    public int compare(EntryEntity o1, EntryEntity o2) {
                        return o1.getDateTime().compareTo(o2.getDateTime());
                    }
                });
        return entries;
    }

    public List<EntryEntity> getUpdateRDots(float r,String username) {
        UserEntity userEntity = userService.getUserByUsername(username);
        List<EntryEntity> entries =entriesRepository.findAllByUserEntity(userEntity);
        Collections.sort(entries,
                new Comparator<EntryEntity>() {
                    @Override
                    public int compare(EntryEntity o1, EntryEntity o2) {
                        return o1.getDateTime().compareTo(o2.getDateTime());
                    }
                });
        for (EntryEntity entry:entries) {
            entry.setR(r);
            entry.setEntry(areaChecker.checkGetInto(entry.getX(),entry.getY(),r));
        }
        return entries;
    }

    public long deleteDots(String username){
        UserEntity userEntity = userService.getUserByUsername(username);
        return entriesRepository.deleteAllByUserEntity(userEntity);
    }

}
