export interface IAuthService {
    /**
     * Attrape fion
     */
    register(email: string): void;
    login(username: string, password: string): Promise<string>;
    logout(): void;
}