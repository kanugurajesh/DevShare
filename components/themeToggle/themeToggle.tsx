"use client"

import styles from './themeToggle.module.css'
import Image from 'next/image'
import { useContext } from "react"
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {

    // importing the theme from the context
    const {toggle,theme}:any = useContext(ThemeContext);

    return <div className={styles.container} onClick={toggle}>
        <Image src={"/moon.png"} alt='' width={14} height={14}/>
        <div className={styles.ball} style={theme == "dark" ? {left:1,background:"white"}:{right:1,background:"#0f172a"}}></div>
        <Image src={"/sun.png"} alt='' width={14} height={14}/>
    </div>

}

export default ThemeToggle;