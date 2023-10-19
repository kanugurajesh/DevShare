"use client"

import { Anybody } from "next/font/google";
// using context api to store the state of the theme
import { createContext, useState } from "react"

export const ThemeContext = createContext({

})

// get the theme from local storage to persist the theme
const getFormLocalStorage = () => {
    if (typeof window !== undefined) {
        const value = localStorage.getItem("theme");
        // At the first time when user visits the app, the theme will be null then we will give it a default value of light
        return value ? value : "light";
    }
}

// ThemeContextProvider is a wrapper component that will wrap the entire app
export const ThemeContextProvider = ({ children }:any) => {
    // state to store the theme
    const [theme,setTheme] = useState(getFormLocalStorage() || "");
    // function to toggle the theme
    return (
        // passing the value of theme using the context provider
        <ThemeContext.Provider value={theme}>
        {children}
        </ThemeContext.Provider>
    )
}