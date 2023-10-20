"use client"

import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Link from 'next/link'

// 👋 Devs, Discover developer stories and ideas here! 
const Featured = () => {
  
  const Data = "👋 Devs, Discover developer stories and ideas here! "

  const [typeEffect] = useTypewriter({
    words: [Data],
    loop: Infinity,
    deleteSpeed: 50,
    typeSpeed: 100,
    delaySpeed: 1000
  })

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.typewriter}>
          {typeEffect}
          <Cursor />
        </span>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/passion.jpg"} alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}><span className={styles.wave}>👋</span> welcome to <b>DevShare</b> share your blogs here</h1>
          <p className={styles.postDesc}>
          👋 everyone <b>DevShare</b> is an initiative which enables developers to share their blogs and articles with the community.
          </p>
          <Link href="#" className={styles.buttonLink}>
            <span className={styles.button}>
              Read more
            </span>
            <i></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Featured