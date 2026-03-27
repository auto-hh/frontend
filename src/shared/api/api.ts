import axios from "axios";

export const api = axios.create({
    baseURL: "http://api.localhost/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
