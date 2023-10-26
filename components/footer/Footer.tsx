import React from 'react'
import styles from '@/components/footer/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/coding.png" alt="logo" width={50} height={50} />
          <h1 className={styles.logoText}>DevShare</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores optio nam accusamus labore illum accusantium aperiam beatae suscipit consequatur laborum distinctio tempore itaque, mollitia ab quia, reiciendis, quasi quae nobis nesciunt esse.
        </p>
        <div className={styles.icons}>
          <Link href={"https://github.com/rajesh604"}>
            <Image src="/github.png" alt="github" width={30} height={30} />
          </Link>
          <Link href={""}>
            <Image src="/linkedin.png" alt="facebook" width={30} height={30} />
          </Link>
          <Link href={""}>
            <Image src="/twitter.png" alt="twitter" width={30} height={30} />
          </Link>
          <Link href={""}>
            <Image src="/youtube.png" alt="instagram" width={30} height={30} />
          </Link>
        </div>
      </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">Home</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/">Web</Link>
            <Link href="/">Mobile</Link>
            <Link href="/">Web3</Link>
            <Link href="/">Dsa</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link href="/">Github</Link>
            <Link href="/">LinkedIn</Link>
            <Link href="/">Twitter</Link>
            <Link href="/">Youtube</Link>
          </div>
        </div>
      </div>
  )
}

export default Footer