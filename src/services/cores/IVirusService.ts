import Virus from "../../models/Virus";

export interface IVirusService {
    getAll(): Promise<Virus[]>
    getByType(type: string): Promise<Virus[]>
    getById(id: number): Promise<Virus>
    create(virus: Virus): Promise<Virus>
    update(id: number, virus: Virus): Promise<Virus>
    addVictims(id: number, victims: number): Promise<Virus>
    delete(id: number): Promise<Virus>
}