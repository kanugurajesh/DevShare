import Link from "next/link";
import React from "react";
import styles from "@/components/menuCategories/menuCategories.module.css"

const MenuCategories = () => {
    return (
        <div className={styles.categoryList}>
            <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.web}`}>
                Web
            </Link>
            <Link href="/blog" className={`${styles.categoryItem} ${styles.mobile}`}>
                Mobile
            </Link>
            <Link href="/blog" className={`${styles.categoryItem} ${styles.ml}`}>
                ML
            </Link>
            <Link href="/blog" className={`${styles.categoryItem} ${styles.dsa}`}>
                DSA
            </Link>
            <Link href="/blog" className={`${styles.categoryItem} ${styles.career}`}>
                Career
            </Link>
        </div>
    )
}

export default MenuCategories