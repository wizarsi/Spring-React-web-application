package com.example.weblab4.POJO.Requests;

public class CheckDotRequest {
    private float x;
    private float y;
    private float r;

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

    @Override
    public String toString() {
        return "CheckDotRequest{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                '}';
    }
}
