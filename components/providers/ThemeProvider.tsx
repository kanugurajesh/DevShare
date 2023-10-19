"use client"

import { ThemeContext } from "../context/ThemeContext";
import React, { useContext } from "react"

const ThemeProvider = ({ children }:any) => {
    const { theme }:any = useContext(ThemeContext);
    return <div className={theme}>{children}</div>
}

export default ThemeProvider;