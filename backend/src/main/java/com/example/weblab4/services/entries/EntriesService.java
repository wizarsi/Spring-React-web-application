package com.example.weblab4.services.entries;

import com.example.weblab4.entities.DotEntity;
import com.example.weblab4.repositories.DotsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EntriesService {

    @Autowired
    private DotsRepository dotsRepository;

    public DotEntity saveEntry(DotEntity dotEntity){
        return dotsRepository.save(dotEntity);
    }

}
