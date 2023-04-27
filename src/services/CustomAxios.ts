import axios from "axios"

export const BASE_URL = 'http://localhost:8000/api';

export default {
    get<T>(url: string): Promise<T> {
        let token = sessionStorage.getItem("session");
        return axios.get(`${BASE_URL}${url}`, token ? { headers: { Authorization: token } } : { })
    },
    post<T>(url: string, body: any): Promise<T> {
        let token = sessionStorage.getItem("session");
        return axios.post(`${BASE_URL}${url}`, JSON.stringify(body), token ? { headers: { Authorization: token } } : { })
    },
    put<T>(url: string, body: any): Promise<T> {
        let token = sessionStorage.getItem("session");
        return axios.put(`${BASE_URL}${url}`, JSON.stringify(body), token ? { headers: { Authorization: token } } : { })
    },
    delete<T>(url: string): Promise<T> {
        let token = sessionStorage.getItem("session");
        return axios.delete(`${BASE_URL}${url}`, token ? { headers: { Authorization: token } } : { })
    }
}