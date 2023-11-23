import React from 'react'
import styles from "./ProjectsGrid.module.css"

import { SectionHeader } from '../../atoms'
import { ProjectCard } from '../../molecules'




type ProjectsGridProps = {
    data: {
        projects: {
            hasWebView: boolean
            projectTools: string[]
            projectTitle: string
            projectDesc: string
            projectActions: {
                name: string
                url: string
                color: string
            }[]
        }[]
        gridTitle: string
        seeMoreBtn: boolean
    }
}





const ProjectsGrid = ({ data }: ProjectsGridProps) => {
    const { projects, gridTitle, seeMoreBtn } = data;

    return (
        <div className={styles.projectsgrid_wrapper}>
            <section className={styles.projectsgrid_headers}>
                <div>
                    <SectionHeader title={gridTitle} />
                </div>
                {seeMoreBtn && (
                    <button>
                        View all ~~&gt;
                    </button>
                )}
            </section>

            <section className={styles.projects_grid}>
                {projects?.map((project, index) => {
                    return (
                        <ProjectCard key={index} cardData={project} />
                    )
                })}
            </section>

        </div>
    )
}

export default ProjectsGrid


// type ProjectProps = {
//     hasWebView: boolean
//     projectTools: string[]
//     projectTitle: string
//     projectDesc: string
//     projectActions: action[]
// }

// type action = {
//     name: string
//     url: string
//     color: string
// }