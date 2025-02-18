import axios from "axios";

const apiUrl = import.meta.env.VITE_GLOBAL_API;

export const api = axios.create({
    baseURL: apiUrl
})