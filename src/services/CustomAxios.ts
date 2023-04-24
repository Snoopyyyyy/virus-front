import axios from "axios"

export const BASE_URL = 'http://127.0.0.1:8000/api';

export default {
    get<T>(url: string): Promise<T> {
        let token = sessionStorage.getItem("session");
        return axios.get(url, token ? { headers: { Authorization: token } } : { })
    },
    post<T>(url: string, body: any): Promise<T> {
        let token = sessionStorage.getItem("session");
        return axios.post(url, JSON.stringify(body), token ? { headers: { Authorization: token } } : { })
    },
    put<T>(url: string, body: any): Promise<T> {
        let token = sessionStorage.getItem("session");
        return axios.put(url, JSON.stringify(body), token ? { headers: { Authorization: token } } : { })
    },
    delete<T>(url: string): Promise<T> {
        let token = sessionStorage.getItem("session");
        return axios.delete(url, token ? { headers: { Authorization: token } } : { })
    }
}