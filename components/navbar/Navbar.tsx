import React from 'react'
import styles from '@/components/navbar/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '@/components/authLinks/AuthLinks'
import ThemeToggle from '@/components/themeToggle/themeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="https://github.com/rajesh604"><Image src="/github.png" alt="Github" width={27} height={27} /></Link>
        <Link href="https://www.linkedin.com/in/rajesh-kanugu-aba8a3254/"><Image src={"/linkedin.png"} alt='Linkedin' width={27} height={27} /></Link>
        <Link href="https://twitter.com/exploringengin1"><Image src={"/twitter.png"} alt='Twitter' width={27} height={27} /></Link>
        <Link href="https://www.youtube.com/@Rajeshcoder"><Image src={"/youtube.png"} alt='YouTube' width={27} height={27} /></Link>
      </div>
      <div className={styles.logo}><Image className={styles.logoImage} src={"/tools.gif"} alt='' width={32} height={32}/> DevShare</div>

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