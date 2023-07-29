import { createContext } from 'react';
import User from './User';

// Interface com dados do contexto
export interface AuthContextData {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
    updateUser(user: User): Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);