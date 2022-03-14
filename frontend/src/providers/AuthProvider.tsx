import { createContext, useContext, useState } from "react";

interface AuthenticationInterface {
    isLoggedIn: boolean
}

const Authentication = createContext<AuthenticationInterface | null>(null);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    return <Authentication.Provider value={{ isLoggedIn }}>
        {children}
    </Authentication.Provider>
}

export const useAuth = () => useContext(Authentication);