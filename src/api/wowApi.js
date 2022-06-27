import axios from "axios";

export const wowApi = axios.create({
    baseURL: "https://us.api.blizzard.com"
});