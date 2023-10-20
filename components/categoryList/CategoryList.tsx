import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href={"/blog?cat=style"} className={`${styles.category} ${styles.style}`}>
          <Image src={"/webapp.png"} alt='' width={32} height={32} className={styles.image}/>
          Web
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.style}`}>
          <Image src={"/mobileapp.png"} alt='' width={32} height={32} className={styles.image}/>
          Mobile
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.style}`}>
          <Image src={"/machinelearning.png"} alt='' width={32} height={32} className={styles.image}/>
          ML
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.style}`}>
          <Image src={"/dsa.png"} alt='' width={32} height={32} className={styles.image}/>
          DSA
        </Link>
        <Link href={"/blog"} className={`${styles.category} ${styles.style}`}>
          <Image src={"/career.png"} alt='' width={32} height={32} className={styles.image}/>
          Career
        </Link>
      </div>
    </div>
  )
}

export default CategoryList