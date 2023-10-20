import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>👋 Devs,</b> Discover developer stories and ideas here!</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/passion.jpg"} alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>👋 welcome to <b>DevShare</b> share your blogs here</h1>
          <p className={styles.postDesc}>
          👋 everyone <b>DevShare</b> is an initiative which enables developers to share their blogs and articles with the community.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured