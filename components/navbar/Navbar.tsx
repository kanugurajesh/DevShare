import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/themeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="https://github.com/rajesh604"><Image src="/github.gif" alt="Facebook" width={26} height={26} /></Link>
        <Link href="https://www.linkedin.com/in/rajesh-kanugu-aba8a3254/"><Image src={"/linkedin.gif"} alt='Linkedin' width={26} height={26} /></Link>
        <Link href="https://twitter.com/exploringengin1"><Image src={"/twitter.gif"} alt='Twitter' width={26} height={26} /></Link>
        <Link href="https://www.youtube.com/@Rajeshcoder"><Image src={"/youtube.gif"} alt='YouTube' width={26} height={26} /></Link>
      </div>
      <div className={styles.logo}><Image src={"/tools.gif"} alt='' width={32} height={32}/> DevShare</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar