import Virus from "../../models/Virus";
import { IVirusService } from "../cores/IVirusService";
import axios from '../CustomAxios';

export default class ApiVirusService implements IVirusService {
    getAll(): Promise<Virus[]> {
        return new Promise((resolve, reject) => {
            axios.get<{data: Virus[]}>(`/virus`).then(data => {
                resolve(data.data)
            }).catch(reject);
        });
    }
    getByType(type: string): Promise<Virus[]> {
        return new Promise((resolve, reject) => {
            axios.get<{data: Virus[]}>(`/virus/type/${type}`).then(data => {
                resolve(data.data)
            }).catch(reject);
        });
    }
    getById(id: number): Promise<Virus> {
        return new Promise((resolve, reject) => {
            axios.get<{data: Virus}>(`/virus/${id}`).then(data => {
                resolve(data.data)
            }).catch(reject);
        });
    }
    create(virus: Virus): Promise<Virus> {
        return axios.post(`/virus`, JSON.stringify(virus));
    }
    update(id: number, virus: Virus): Promise<Virus> {
        return axios.put(`/virus/${id}`, JSON.stringify(virus));
    }
    addVictims(id: number, victims: number): Promise<Virus> {
        return axios.put(`/virus/${id}/victim`, JSON.stringify({ victims }));
    }
    delete(id: number): Promise<Virus> {
        return axios.delete(`/virus/${id}`);
    }
}