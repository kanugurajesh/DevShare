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
        <Image src="/github.png" alt="Facebook" width={24} height={24} />
        <Image src={"/linkedin.png"} alt='Instagram' width={24} height={24} />
        <Image src={"/twitter.png"} alt='Twitter' width={24} height={24} />
        <Image src={"/youtube.png"} alt='YouTube' width={24} height={24} />
      </div>
      <div className={styles.logo}>🛠️ DevShare</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>HomePage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar