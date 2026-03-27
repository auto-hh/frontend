import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.localhost/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
