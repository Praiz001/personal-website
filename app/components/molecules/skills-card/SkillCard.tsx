import React from 'react'
import styles from "./SkillCard.module.css"

interface SkillCardProps {
   data: {
        title: string
         skills: string[]
    }
}

const SkillCard = ({ data }: SkillCardProps) => {
    const { title, skills } = data;

    return (
        <div className={styles.skillscard_wrapper}>
            <p>{title}</p>
            <ul>
                {skills?.map((skill, idx) => {
                    return (
                        <li key={idx}>{skill}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SkillCard