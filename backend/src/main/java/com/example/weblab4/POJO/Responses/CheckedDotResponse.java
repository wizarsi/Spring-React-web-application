package com.example.weblab4.POJO.Responses;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class CheckedDotResponse {
    private float x;
    private float y;
    private float r;
    private boolean isEntry = false;

    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public float getR() {
        return r;
    }

    public void setR(float r) {
        this.r = r;
    }

    public boolean isEntry() {
        return isEntry;
    }

    public void setEntry(boolean entry) {
        isEntry = entry;
    }

    @Override
    public String toString() {
        return "CheckedDotResponse{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", isEntry=" + isEntry +
                '}';
    }
}
