import React from 'react'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  title: string
  hasHorzLine: boolean
}

const SectionHeader = ({ title, hasHorzLine }: SectionHeaderProps) => {
  return (
    <div className={styles.sectionhead_wrapper}>
      <p><span>#</span>{title}</p>
      {hasHorzLine && <hr />}
    </div>
  )
}

export default SectionHeader