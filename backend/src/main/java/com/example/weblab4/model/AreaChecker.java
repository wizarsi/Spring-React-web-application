package com.example.weblab4.model;

import com.example.weblab4.POJO.Requests.CheckDotRequest;
import com.example.weblab4.entities.EntryEntity;
import org.springframework.stereotype.Component;

import javax.xml.crypto.Data;
import java.util.Date;

@Component
public class AreaChecker {

    public EntryEntity checkEntry(CheckDotRequest checkDotRequest){
        boolean entryValue = checkGetInto(checkDotRequest.getX(), checkDotRequest.getY(), checkDotRequest.getR());
        Date date = new Date();
        return new EntryEntity(checkDotRequest.getX(), checkDotRequest.getY(), checkDotRequest.getR(), entryValue,date);
    }

    public boolean checkGetInto(float x, float y, float r) {
        if (checkIntoTriangle(x, y, r) || checkIntoRectangle(x, y, r) || checkIntoCircle(x, y, r)) {
            return true;
        }
        return false;
    }

    public boolean checkIntoTriangle(float x, float y, float r) {
        if ((x >= 0 && x <= r/2) && (y <= 0 && y >= -r/2)) {
            float d = ((x - r/2) * (-r/2 - 0))- ((0 - (r/2) )* (y - 0));
            //(x - x1) * (y2 - y1) - (x2 - x1) * (y - y1) = 0
            if (d <= 0) {
                return true;
            }
        }
        return false;
    }

    public boolean checkIntoRectangle(float x, float y, float r) {
        if ((x <= 0 && x >= -r) && (y <= 0 && y >= -r)) {
            return true;
        }
        return false;
    }

    public boolean checkIntoCircle(float x, float y, float r) {
        if (((x >= -r && x <= 0) && (y >= 0 && y <= r))) {
            if (((x * x + y * y) <= r * r)) {
                return true;
            }
        }
        return false;
    }
}
