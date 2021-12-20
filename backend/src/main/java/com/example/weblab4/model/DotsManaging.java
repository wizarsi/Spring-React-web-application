package com.example.weblab4.model;

import com.example.weblab4.POJO.Requests.CheckDotRequest;
import com.example.weblab4.entities.DotEntity;

public interface DotsManaging {
    public DotEntity addDot(CheckDotRequest checkDotRequest, String username);
}
