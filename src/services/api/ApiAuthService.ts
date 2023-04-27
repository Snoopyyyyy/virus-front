import { IAuthService } from '../cores/IAuthService';
import axios from '../CustomAxios';

export default class ApiAuthService implements IAuthService {
    fakeLogin(email: string): Promise<void> {
        return axios.post(`/login_fake`, { email });
    }

    login(username: string, password: string): Promise<{token: string}> {
        return axios.put(`/login_check`, { username, password });
    }
    logout(): void {
        sessionStorage.removeItem("session")
    }
}