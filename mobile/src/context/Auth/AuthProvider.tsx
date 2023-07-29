import React, { useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { AuthContextData, AuthContext } from '../Types/AuthContext';

import AsyncStorage from '@react-native-async-storage/async-storage';
import User from '../Types/User';
import signInService from '../../services/authentication';

type Props = {
    children?: React.ReactNode
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [AuthData, setAuthData] = useState<User>(null);

    useEffect(() => {
        try {
            //Try get the data from Async Storage
            AsyncStorage.getItem('@User').then((data) => {
                if (data) {
                    //If there are data, it's converted to an Object and the state is updated.
                    setAuthData(JSON.parse(data) as User);
                }
            }).catch(error => {
                Alert.alert('Falha na sincronização', error.message);
            });
        } catch (error) {
            Alert.alert('Falha no Carregamento', error.message);
        }
    }, []);

    async function signIn(user: string, password: string) {
        console.log("signIn")
        signInService(user, password)
            .then((_User) => {
                AsyncStorage.setItem('@User', JSON.stringify(_User));
                console.log("signIn: ", _User);
                setAuthData(_User);
                return true;
            })
            .catch((error) => {
                Alert.alert('Falha no Login', error.message);
                return false;
            })
    }

    async function signOut() {
        setAuthData(null);
        AsyncStorage.removeItem('@User');
    }

    // Função updateUser que recebe um user e retorna uma Promise Void
    async function updateUser(user: User) {
        AsyncStorage.setItem('@User', JSON.stringify(user));
        setAuthData(user);
    }

    return (
        <AuthContext.Provider value={{ user: AuthData, signIn, signOut, updateUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}