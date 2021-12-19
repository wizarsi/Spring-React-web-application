import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/web-lab4/api/entries/',
    headers: {
        "Content-Type": "application/json",
    },
});

const entriesAPI = {
    async checkEntry(x, y, r, token) {
        const data = {
            "x": x,
            "y": y,
            "r":r
        }
        const config={
            headers:{
                Authorization: "Bearer "+token,
            }
        }
        return await axiosInstance.post("check", data, config);

    },

}

export default entriesAPI;

