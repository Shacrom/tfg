import axios from "axios";

export const wowApi = axios.create({
    baseURL: "http://localhost:4000/"
});