import React from 'react'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
    title: string
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className={styles.sectionhead_wrapper}>
        <p><span>#</span>{title}</p>
        <hr />
    </div>
  )
}

export default SectionHeader