import { IAuthService } from '../cores/IAuthService';

export default class ApiAuthService implements IAuthService {
    register(email: string): void {
        throw new Error('Method not implemented.');
    }
    login(username: string, password: string): Promise<string> {
        throw new Error('Method not implemented.');
    }
    logout(): void {
        throw new Error('Method not implemented.');
    }

}