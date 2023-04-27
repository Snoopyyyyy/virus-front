import { IAuthService } from '../cores/IAuthService';
import axios from '../CustomAxios';

export default class ApiAuthService implements IAuthService {
    fakeLogin(email: string): Promise<void> {
        return axios.post(`/login_fake`, { email });
    }
    async login(username: string, password: string): Promise<string> {
        return (await axios.put<{token: string}>(`/login_check`, { username, password })).token;
    }
    logout(): void {
        sessionStorage.removeItem("session")
    }
}