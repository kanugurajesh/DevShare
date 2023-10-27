import React from 'react'
import LoginFormComponent from '@/app/devshare/login/loginComponent';
import styles from '@/app/devshare/login/login.module.css';

const page = () => {
  return (
    <div className={styles.rivestorycontainerlogin}>
        <LoginFormComponent />
    </div>
  )
}

export default page