"use client"

// using context api to store the state of the theme
import { createContext, useEffect, useState } from "react";
// define localstorage

export const ThemeContext = createContext({
    
});

// get the theme from local storage to persist the theme
const getFormLocalStorage = () => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        // At the first time when user visits the app, the theme will be null then we will give it a default value of light
        return value ? value : "light";
    }
}

// ThemeContextProvider is a wrapper component that will wrap the entire app
export const ThemeContextProvider = ({ children }:any) => {
    
    // state to store the theme
    const [theme,setTheme] = useState(() => {
        return getFormLocalStorage() || "light";
    });

    // function to toggle the theme
    const toggle = () => {
        setTheme((prevTheme) => {
            if (prevTheme === "light") {
                return "dark";
            } else {
                return "light";
            }
        })
    }

    // useEffect to set the theme in local storage whenever the theme changes
    useEffect(() => {
        localStorage.setItem("theme",theme);
    },[theme]);

    // function to toggle the theme
    return (
        // passing the value of theme using the context provider
        <ThemeContext.Provider value={{theme, toggle}}>
        {children}
        </ThemeContext.Provider>
    )
}