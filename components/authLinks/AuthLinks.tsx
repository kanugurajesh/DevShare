"use client"

import React, {useState} from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {

  const [open,setOpen] = useState(false);

  const status = "not logged in"
  return (
    <div className={styles.container}>
      {status === "not logged in" ? (
        <>
          <Link href={"/login"} className={styles.link}>Login</Link>
        </>
      ):(
        <>
          <Link href={"/write"} className={styles.link}>Write</Link>
          <span className={styles.link}>LogOut</span>
        </>
      )}
      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          {status === "not logged in" ? (
              <>
                <Link href={"/login"}>Login</Link>
              </>
            ):(
              <>
                <Link href={"/write"}>Write</Link>
                <span className={styles.link}>LogOut</span>
              </>
          )}
        </div>
      )}
    </div>
  )
}

export default AuthLinks;