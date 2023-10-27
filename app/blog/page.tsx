import React from 'react'
import styles from "@/app/blog/blog.module.css"
import Menu from "@/components/Menu/Menu"
import CardList from '@/components/cardList/CardList'

const blog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu withImage={true}/>
      </div>
    </div>
  )
}

export default blog