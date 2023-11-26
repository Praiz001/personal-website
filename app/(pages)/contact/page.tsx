import React from 'react'
import styles from "./page.module.css"

import { PageHeading } from '@/app/components/molecules'
import { ContactForm } from '@/app/components/templates'
import { SectionHeader } from '@/app/components/atoms'

import { mocks } from '../constants'

const Contact = () => {
    const { aboutmePage: { pageHeading}} = mocks;

    return (
        <div className={styles.contact_container}>
            <section className={styles.contact_heading}>
                <PageHeading data={pageHeading} />
            </section>

            <section className={styles.contact_info}>
                <p>I’m interested in freelance opportunities. However, 
                    if you have other request or question, 
                    don’t hesitate to contact me
                </p>

                <div className={styles.contactinfo_form}>
                    <ContactForm />   
                </div>
            </section>

            <section className={styles.media_section}>
                <SectionHeader title="all-media" hasHorzLine={false} />


            </section>
        </div>
    )
}

export default Contact