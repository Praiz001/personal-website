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
                <SectionHeader title='contacts' />
            </section>

            <section className={styles.contact_content}>
                <p>I’m interested in freelance opportunities.
                    However, if you have other request or question, don’t hesitate to contact me.
                </p>

                <div className={styles.contact_channels}>
                    <ContactCard data={contactMe} />
                </div>
            </section>
        </div>
    )
}

export default ContactPreview