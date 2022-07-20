//Acá armo un PRovaider para ver si el usuario se logueo

import { createContext, useState, useEffect } from 'react';

//1. Creo contexto 
const initialState = {
    // información del usuario
    user: null,
    isAuthenticated: false, // si está o no logueado
    toggleAuth: () => null, // función para actualizar el contexto
}

//2. Creo el context provide y sus funcionalidaes
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState({
        user: null,
        isAuthenticated: false,
    })

    const toggleAuth = (user) => {

        //llamo al set isLoggedIn, porque si está logueado tengo que cambiar el estado, y lo ejecuto
        //Actualiza los valores una vez logueado
        setIsLoggedIn({
            user,
            isAuthenticated: !isLoggedIn.isAuthenticated,
        })
    }

    useEffect(() => {
        const userStorage = JSON.parse(localStorage.getItem("user"));
        userStorage
            ? setIsLoggedIn({ user: userStorage.name, isAuthenticated: true })
            : setIsLoggedIn({ user: null, isAuthenticated: false });
    }, []);

    /* 3. Tengo que pasar las propiedades que tendra el provide y que defini acá */

    return (<AuthContext.Provider value={{ ...isLoggedIn, toggleAuth }}>{children}</AuthContext.Provider>)


}

export default AuthContext;

