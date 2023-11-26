import React from 'react'
import styles from "./page.module.css"

import { PageHeading } from '@/app/components/molecules'
import { ProjectsGrid } from '@/app/components/organisms'

import { mocks } from '../constants'

const Projects = () => {
    const { projectsPage: { pageHeading, completeProjectGrid, ongoingProjectGrid }  } = mocks;

    return (
        <div className={styles.projects_container}>
            <section className={styles.pageheading_section}>
                <PageHeading data={pageHeading} />
            </section>

            <section className={styles.projectgrid_section}>
                <ProjectsGrid data={completeProjectGrid} />
                <ProjectsGrid data={ongoingProjectGrid} />
            </section>
        </div>
    )
}

export default Projects