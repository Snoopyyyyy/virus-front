import Virus from "../../models/Virus";
import { IVirusService } from "../cores/IVirusService";
import axios from '../CustomAxios';

export default class ApiVirusService implements IVirusService {
    getAll(): Promise<Virus[]> {
        return axios.get(`/virus`);
    }
    getByType(type: string): Promise<Virus[]> {
        return axios.get(`/virus/type/${type}`);
    }
    getById(id: number): Promise<Virus> {
        return axios.get(`/virus/${id}`);
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