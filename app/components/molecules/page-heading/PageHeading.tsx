import React from 'react'
import styles from "./PageHeading.module.css"


interface PageHeadingProps {
    data: {
        title: string
        desc: string
    }
}

const PageHeading = ({ data }: PageHeadingProps) => {
    const { title, desc } = data;
    
    return (
        <div className={styles.pageheading_container}>
            <p><span>/</span>{title}</p>
            <p>{desc}</p>
        </div>
    )
}

export default PageHeading