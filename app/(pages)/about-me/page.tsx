import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

import { SectionHeader } from '@/app/components/atoms'
import { PageHeading, SkillCard } from '@/app/components/molecules'
import { AboutmePreview } from '@/app/components/organisms'

import { logodotGroup } from '@/app/assets'
import { mocks } from '../constants'

const AboutMe = () => {
  const { aboutmePage: { pageHeading, skills, funFacts } } = mocks;
  return (
    <div className={styles.aboutme_container}>
      <section className={styles.pageheading_section}>
        <PageHeading data={pageHeading} />
      </section>

      <section className={styles.personaldesc_section}>
        <AboutmePreview isPreview={false} />
      </section>

      <section className={styles.skills_section}>
        <SectionHeader title='skills' hasHorzLine={false} />

        <div className={styles.skills_grid}>
          {skills?.map((skill, idx) => {
            return (
              <SkillCard key={idx} data={skill} />
            )
          })}
        </div>
      </section>

      <section className={styles.funfact_section}>
        <SectionHeader title='my-fun-facts' hasHorzLine={false} />

        <div className={styles.funfact_content}>
          <div className={styles.facts}>
            {funFacts?.map((fact, idx) => (
              <p key={idx}>{fact}</p>
            ))}
          </div>
          
          <div className={styles.fact_figures}>
            <figure>
              <Image src={logodotGroup} alt='dots' />
            </figure>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutMe