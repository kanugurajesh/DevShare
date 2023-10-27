import styles from '@/components/comments/comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Comments = () => {
    const status = 'authenticated'
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Comments
            </h1>
            {status === 'authenticated' ? (
                <div className={styles.write}>
                    <textarea placeholder='write a comment..' className={styles.input}/>
                    <button className={styles.button}>Send</button>
                </div>
            ) : (
                <Link href='/login'>
                    <a className={styles.login}>Login to write a comment</a>
                </Link>
            )}
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src='/p1.jpeg' alt="" width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments