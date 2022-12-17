import { createContext, useState } from "react";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        role: "",
        token: "",
    });

    const data = {
        role: auth?.role !== "" ? auth?.role : localStorage.getItem("role"),
        token:
            auth?.token !== "" ? auth?.token : localStorage.getItem("access_token"),
    };

    return (
        <AuthContext.Provider value={{ data, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
