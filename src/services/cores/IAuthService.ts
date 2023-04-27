export interface IAuthService {
    /**
     * Attrape fion
     */
    fakeLogin(email: string): Promise<void>;
    login(username: string, password: string): Promise<{token: string}>;
    logout(): void;
}