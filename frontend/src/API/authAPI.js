import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/web-lab4/api/auth/',
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*"

},
});

const authAPI = {
    async login(username, password) {
        const data = {
            "username": username,
            "password": password
        }
        return await axiosInstance.post("login", data);

    },
    async register(username, password) {
        const data = {
            "username": username,
            "password": password
        }
        return await axiosInstance.post("register", data);

    }
}

export default authAPI;

