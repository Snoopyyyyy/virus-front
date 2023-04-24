import React, { createContext } from 'react';

export type AuthContextType = {
    token: string|null
}

const AuthContext = createContext<AuthContextType>({
    token: null,
});

export default AuthContext;