import styles from '@/app/[slug]/page.module.css'
import Comments from '@/components/comments/Comments'
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="user" fill className={styles.image} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Dow</span>
              <span className={styles.date}>01.01
              2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="user" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corrupti voluptate ad blanditiis. Molestias delectus et fuga. Reiciendis, inventore eum.
            </p>
            <h5 className={styles.h5}>Lorem ipsum dolor sit amet consectetur.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, blanditiis modi. Quam reprehenderit consequuntur perferendis voluptas labore saepe fuga sunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, blanditiis modi. Quam reprehenderit consequuntur perferendis voluptas labore saepe fuga sunt.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
      <Menu withImage={false}/>
    </div>
    </div>
  )
}

export default page 