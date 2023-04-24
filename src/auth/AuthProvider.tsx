import React, { ReactNode } from 'react';
import AuthContext, { AuthContextType } from './AuthContext';

export type AuthProviderProps = {
    children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const auth: AuthContextType = {
        token: sessionStorage.getItem('session')
    }

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}