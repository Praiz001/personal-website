import React from 'react'
import styles from "./ContactPreview.module.css"

import { SectionHeader } from '../../atoms'
import { ContactCard } from '../../molecules'
import { mocks } from '../constant'

const ContactPreview = () => {
    const { contactMe } = mocks;
    return (
        <div className={styles.contactpreview_wrapper}>
            <section>
                <SectionHeader title='contacts' hasHorzLine={true} />
            </section>

            <section className={styles.contact_content}>
                <p>
                    I&apos;m open to freelance opportunities and collaborations. 
                    Feel free to contact me for any inquiries or further information.
                </p>

                <div className={styles.contact_channels}>
                    <ContactCard data={contactMe} />
                </div>
            </section>
        </div>
    )
}

export default ContactPreview;