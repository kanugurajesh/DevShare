import React, {useState} from 'react'
import styles from '@/app/devshare/write/write.module.css'
import Image from 'next/image'

const Write = () => {
    const [open,setOpen] = useState(false);
    return (
    <div className={styles.container}>
        <input type="text" placeholder='Title'/>
        <div className={styles.editor}>
            <button className={styles.button}>
                <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
        </div>
    </div>
    )
}

export default Write