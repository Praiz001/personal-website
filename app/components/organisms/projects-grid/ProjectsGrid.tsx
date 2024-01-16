"use client"
import React from 'react'
import styles from "./ProjectsGrid.module.css"
import { useRouter } from 'next/navigation';

import { SectionHeader } from '../../atoms'
import { ProjectCard } from '../../molecules'
import { StaticImageData } from 'next/image';
import { arrRightIcon } from '@/app/assets';
import Image from 'next/image';



type ProjectsGridProps = {
    data: {
        projects: {
            hasWebView: boolean
            projectTools: string[]
            projectTitle: string
            projectDesc: string
            projectImg: StaticImageData
            projectActions: {
                name: string
                url: string
                variant: "primary" | "secondary"
                btnImg: any
            }[]
        }[]
        gridTitle: string
        seeMoreBtn: boolean
        hasHorzLine: boolean
    }
}





const ProjectsGrid = ({ data }: ProjectsGridProps) => {
    const router = useRouter();
    const { projects, gridTitle, seeMoreBtn, hasHorzLine } = data;

    return (
        <div className={styles.projectsgrid_wrapper}>
            <section className={styles.projectsgrid_headers}>
                <div>
                    <SectionHeader title={gridTitle} hasHorzLine={hasHorzLine} />
                </div>
                {seeMoreBtn && (
                    <button onClick={() => router.push('/projects')}>
                        View all <Image src={arrRightIcon} alt="see more" />
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