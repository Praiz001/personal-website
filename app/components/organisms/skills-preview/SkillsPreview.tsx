import React from 'react'
import styles from "./SkillsPreview.module.css"
import Image from 'next/image';

import { skillDot, skillLogo, squareLg, squareSm } from '@/app/assets';

import { SectionHeader } from '../../atoms'
import { SkillCard } from '../../molecules';
import { mocks } from '../constant';


const SkillsPreview = () => {
      const { skills: { LangData, DbData, OtherData, ToolsData, FrameworkData } } = mocks;
      return (
            <div className={styles.skillspreview_wrapper}>
                  <section className={styles.preview_header}>
                        <SectionHeader title='skills' hasHorzLine={true} />
                  </section>

                  <section className={styles.preview_content}>
                        <div className={styles.preview_figures}>
                              <figure>
                                    <Image src={skillDot} alt='illustration' />
                              </figure>
                              <figure>
                                    <Image src={skillDot} alt='illustration' />
                              </figure>
                              <figure>
                                    <Image src={skillLogo} alt='illustration' />
                              </figure>
                              <figure>
                                    <Image src={squareLg} alt='illustration' />
                              </figure>
                              <figure>
                                    <Image src={squareSm} alt='illustration' />
                              </figure>
                        </div>

                        <div className={styles.preview_skills}>
                              <div>
                                    <SkillCard data={LangData} />
                              </div>
                              <div>
                                    <SkillCard data={DbData} />
                                    <SkillCard data={OtherData} />
                              </div>
                              <div>
                                    <SkillCard data={ToolsData} />
                                    <SkillCard data={FrameworkData} />
                              </div>
                        </div>
                  </section>

            </div>
      )
}

export default SkillsPreview