import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey, Rajesh here!</b> Discover my stories and creative ideas</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/p1.jpeg"} alt='' fill/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Hello Welcome to tech boys share your blogs here</h1>
          <p className={styles.postDesc}>
            Hi Tech Boys is my initiative which enables developers to share their blogs and articles with the community.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured