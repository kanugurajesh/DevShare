import styles from '@/app/homepage.module.css'
import Featured from '@/components/featured/Featured'
import CategoryList from '@/components/categoryList/CategoryList'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/Menu/Menu'

export default function Home() {
  return (
      <div className={styles.container}>
        <Featured />
        <CategoryList />
        <div className={styles.content}>
          <CardList />
          <Menu withImage={true}/>
        </div>
      </div>
    )
}