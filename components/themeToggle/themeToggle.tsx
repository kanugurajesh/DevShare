"use client"

import styles from './themeToggle.module.css'
import Image from 'next/image'
import { useContext } from "react"
import { ThemeContext } from '../context/ThemeContext'

const ThemeToggle = () => {

    // importing the theme from the context
    const {theme}:any = useContext(ThemeContext);

    return <div className={styles.container}>
        <Image src={"/moon.png"} alt='' width={14} height={14}/>
        <div className={styles.ball}></div>
        <Image src={"/sun.png"} alt='' width={14} height={14}/>
    </div>
}

export default ThemeToggle;