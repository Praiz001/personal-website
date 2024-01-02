"use client"
import React from 'react';
import styles from "./ProjectCard.module.css";
import Image from 'next/image';

import { Button } from '../../atoms';

type ProjectCardProps = {
  cardData: {
    hasWebView: boolean
    projectTools: string[]
    projectTitle: string
    projectDesc: string
    projectImg: any
    projectActions: {
      name: string
      url: string
      variant: "primary" | "secondary"
    }[]
  }
}

const ProjectCard = ({ cardData }: ProjectCardProps) => {
  const { hasWebView, projectImg, projectTools, projectTitle, projectDesc, projectActions } = cardData || {};

  const routeExternally = (route: string) => {
    window.open(route, '_blank', 'noopener');
  }

  return (
    <div className={styles.projectcard_wrapper} >
      <figure>
        {hasWebView && (
          <Image src={projectImg} alt='web view' width={330} height={201} />
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
              const { name, url, variant } = actions;
              return (
                <Button 
                  onClick={() => routeExternally(url)} 
                  key={index} 
                  label={name} 
                  variant={variant}
                />
              )
            })}
          </div>
        </div>
      </section>



    </div>
  )
}

export default ProjectCard