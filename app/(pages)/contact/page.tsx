import React from 'react'
import styles from "./page.module.css"

import { PageHeading } from '@/app/components/molecules'

import { mocks } from '../constants'

const Contact = () => {
    const { aboutmePage: { pageHeading}} = mocks;

    return (
        <div className={styles.contact_container}>
            <section className={styles.contact_heading}>
                <PageHeading data={pageHeading} />
            </section>
        </div>
    )
}

export default Contact