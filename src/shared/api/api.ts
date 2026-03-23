import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:80/",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 3000,
    withCredentials: true,
});
