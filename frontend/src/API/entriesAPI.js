import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/web-lab4/api/entries/',
    headers: {
        "Content-Type": "application/json",
    },
});

const entriesAPI = {
    async checkEntryRequest(x, y, r, token) {
        const data = {
            "x": x,
            "y": y,
            "r": r
        }
        const config = {
            headers: {
                Authorization: "Bearer " + token,
            }
        }
        return await axiosInstance.post("check", data, config);

    },
    async getEntriesRequest(token) {
        const config = {
            headers: {
                Authorization: "Bearer " + token,
            }
        }
        return await axiosInstance.get("getEntries", config);

    }, async clearEntriesRequest(token) {
        const config = {
            headers: {
                Authorization: "Bearer " + token,
            }
        }
        return await axiosInstance.delete("clearEntries", config);

    }, async getEntriesForGraphRequest(radius, token) {
        const config = {
            headers: {
                Authorization: "Bearer " + token,
            },
            params: { r: radius }
        }
        return await axiosInstance.get("getEntriesForGraph", config);

    },

}

export default entriesAPI;

