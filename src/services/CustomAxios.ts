import axios from "axios"

export const BASE_URL = 'http://localhost:8000/api';

export default {
    get<T>(url: string): Promise<T> {
        let token = `Bearer ${sessionStorage.getItem("session")}`;
        return new Promise((resolve, reject) => {
            axios.get(`${BASE_URL}${url}`, token ? { headers: { Authorization: token } } : {}).then(res => {
                resolve(res.data);
            }).catch(reject)
        })
    },
    post<T>(url: string, body: any): Promise<T> {
        let token = `Bearer ${sessionStorage.getItem("session")}`;
        return new Promise((resolve, reject) => {
            return axios.post(`${BASE_URL}${url}`, JSON.stringify(body), token ? { headers: { Authorization: token } } : {}).then(res => {
                resolve(res.data);
            }).catch(reject)
        })
    },
    put<T>(url: string, body: any): Promise<T> {
        let token = `Bearer ${sessionStorage.getItem("session")}`;
        return new Promise((resolve, reject) => {
            return axios.put(`${BASE_URL}${url}`, JSON.stringify(body), token ? { headers: { Authorization: token } } : {}).then(res => {
                resolve(res.data);
            }).catch(reject)
        })
    },
    delete<T>(url: string): Promise<T> {
        let token = `Bearer ${sessionStorage.getItem("session")}`;
        return new Promise((resolve, reject) => {
            return axios.delete(`${BASE_URL}${url}`, token ? { headers: { Authorization: token } } : {}).then(res => {
                resolve(res.data);
            }).catch(reject)
        })
    }
}