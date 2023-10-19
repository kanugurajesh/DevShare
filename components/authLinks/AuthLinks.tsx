import React from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {
  const status = "not logged in"
  return (
    <div className={styles.container}>
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
  )
}

export default AuthLinks;