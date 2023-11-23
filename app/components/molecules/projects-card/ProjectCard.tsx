import React from 'react';
import styles from "./ProjectCard.module.css";
import Image from 'next/image';

import { Button } from '../../atoms';
import { webViewImg } from '@/app/assets';

// type action = {
//   name: string
//   url: string
//   color: string
// }

// interface ProjectCardProps {
//   cardData: {
//     hasWebView: boolean
//     projectTools: string []
//     projectTitle: string
//     projectDesc: string
//     projectActions: action []
//   }
// }

type ProjectCardProps = {
  cardData: {
    hasWebView: boolean
    projectTools: string[]
    projectTitle: string
    projectDesc: string
    projectActions: {
      name: string
      url: string
      color: string
    }[]
  }
}

const ProjectCard = ({ cardData }: ProjectCardProps) => {
  const { hasWebView, projectTools, projectTitle, projectDesc, projectActions } = cardData || {};

  return (
    <div className={styles.projectcard_wrapper} >
      <figure>
        {hasWebView && (
          <Image src={webViewImg} alt='web view' />
        )}
      </figure>

      <section className={styles.projectcard_body} >
        <div className={styles.project_tools} >
          {projectTools?.map((tool, index) => {
            return (
              <p key={index}>{tool}</p>
            )
          })}
        </div>

        <div className={styles.project_desc} >
          <p>{projectTitle}</p>
          <p>{projectDesc}</p>
          <div>
            {projectActions?.map((actions, index) => {
              const { name, url, color } = actions;
              return (
                <Button key={index} label={name} borderColor={color} />
              )
            })}
          </div>
        </div>
      </section>



    </div>
  )
}

export default ProjectCard