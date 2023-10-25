"use client"

import styles from '@/components/themeToggle/themeToggle.module.css'
import Image from 'next/image';
import { useContext } from "react";
import { ThemeContext } from "@/components/context/ThemeContext";

const ThemeToggle = () => {

    // importing the theme from the context
    const {toggle,theme}:any = useContext(ThemeContext);

    return <div className={styles.container} onClick={toggle} style={theme === "dark" ? {backgroundColor: "white"}: { backgroundColor:"#0f172a" }}>
        <Image src={"/moon.png"} alt='' width={14} height={14}/>
        <div className={styles.ball} style={theme == "dark" ? {left:1.5,background:"#0f172a"}:{right:1.5,background:"white"}}></div>
        <Image src={"/sun.png"} alt='' width={14} height={14}/>
    </div>

}

export default ThemeToggle;