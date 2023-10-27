import React from 'react'
import styles from '@/components/Menu/menu.module.css'
import MenuPosts from '@/components/menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = ({withImage}:any) => {
  return (
    <div className={styles.container}>
      <div className={styles.entity}>
        <h2 className={styles.subtitle}>What&apos;s hot</h2>
        <h1 className={styles.title}>Most Popular</h1>
        <MenuPosts withImage={withImage} />
      </div>
      <div className={styles.entity}>
        <h2 className={styles.subtitle}>Discover by topic</h2>
        <h1 className={styles.title}>Categories</h1>
        <MenuCategories />
      </div>
      <div className={styles.entity}>
        <h2 className={styles.subtitle}>Choosen by the editor</h2>
        <h1 className={styles.title}>Editor Pick</h1>
        <MenuPosts withImage={withImage} />
      </div>
    </div>
  )
}

export default Menu