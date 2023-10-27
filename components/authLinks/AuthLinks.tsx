"use client"

import React, {useState,useEffect} from 'react'
import styles from '@/components/authLinks/authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {

  const [open,setOpen] = useState(false);

  // when ever the open is true the user should not be able to scroll
  
  useEffect(()=>{
    if(open){
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }else{
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  },[open])

  const status = "not logged in"
  return (
    <div className={styles.container}>
      {status === "not logged in" ? (
        <>
          <Link href={"/devshare/login"} className={styles.link}>Login</Link>
        </>
      ):(
        <>
          <Link href={"/devshare/write"} className={styles.link}>Write</Link>
          <span className={styles.link}>LogOut</span>
        </>
      )}
      <div className={`${styles.burger} ${open ? styles.active : ''}`} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"} className={`${styles.menuLink} ${open?styles.showLink: ''}`}>Home</Link>
          <Link href={"/about"} className={`${styles.menuLink} ${open?styles.showLink: ''}`}>About</Link>
          <Link href={"/contact"} className={`${styles.menuLink} ${open?styles.showLink: ''}`}>Contact</Link>
          {status === "not logged in" ? (
              <>
                <Link href={"/devshare/login"} className={`${styles.menuLink} ${open?styles.showLink: ''}`}>Login</Link>
              </>
            ):(
              <>
                <Link href={"/write"} className={open?styles.showLink: ''}>Write</Link>
                <span className={styles.link}>LogOut</span>
              </>
          )}
        </div>
      )}
    </div>
  )
}

export default AuthLinks;