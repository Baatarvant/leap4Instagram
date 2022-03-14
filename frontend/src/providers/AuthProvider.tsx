import React from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { LoginScreen } from "../screens";

interface User {
    username: string;
}

interface AuthenticationInterface {
    user: User | null;
    login: () => void;
    logout: () => void;
}

const Authentication = createContext<AuthenticationInterface | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const login = () => {
        setUser({ username: 'username' });
    }
    const logout = () => {
        setUser(null);
    }
    return (
        <Authentication.Provider value={{ user, login, logout }}>
            {user && children}
            {!user && <LoginScreen />}
        </Authentication.Provider>
    );
}

export const useAuth = () => useContext(Authentication);