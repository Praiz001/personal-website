import React from 'react'
import styles from "./ContactForm.module.css"
import { Button } from '../../atoms'

const ContactForm = () => {
    return (
        <form className={styles.contactform_container}>
            <span>
                <input type="text" placeholder='Name' />
                <input type="email" name="" id="" placeholder='Email' />
            </span>
            <input type="text" placeholder='Title' />
            <textarea name="" id="" cols={30} rows={10} placeholder='Message'></textarea>
            <Button label='Send' />
        </form>

    )
}

export default ContactForm