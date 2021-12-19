package com.example.weblab4.services.entries;

import com.example.weblab4.POJO.Requests.CheckDotRequest;
import com.example.weblab4.POJO.Responses.CheckedDotResponse;
import com.example.weblab4.dots.AreaChecker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EntriesService {
    @Autowired
    private AreaChecker areaChecker;

    public CheckedDotResponse checkEntry(CheckDotRequest checkDotRequest){
       return areaChecker.checkEntry(checkDotRequest);
    }

}
