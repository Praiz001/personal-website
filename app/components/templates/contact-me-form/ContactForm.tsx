'use client'
import React, { useState, ChangeEvent } from 'react'
import styles from "./ContactForm.module.css"
import { Button } from '../../atoms';
import { sendContact } from "../../../lib/sendContact";


import { validateForm } from "../../../utils/validateForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type UserInputType = {
    name: string
    email: string
    title: string
    message: string
}

const initUserInput: UserInputType = {
    name: '',
    email: '',
    title: '',
    message: ''
}

const initErrorState: UserInputType = {
    name: '',
    email: '',
    title: '',
    message: ''
}

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setformData] = useState(initUserInput)
    const [validationError, setValidationError] = useState(initErrorState)


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setformData((prev) => ({
            ...prev,
            [name]: value
        }))

        setValidationError((prev) => ({ // Clear validation errors when user starts typing again
            ...prev,
            [name]: '',
        }));
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const error = validateForm(formData);
        setValidationError(error);

        if (Object.keys(error).length === 0) {
            try {
                setIsLoading(true);
                const res = await sendContact(formData);
                const { message } = res.data;

                toast.success(message, {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                setformData(initUserInput); //reset contact form on success

            } catch (error: any) {
                if (error.response) {
                    const { message } = error.response.data;
                    toast.error(message, {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            } finally {
                setIsLoading(false)
            }
        }
    }






    return (
        <form onSubmit={handleSubmit} className={styles.contactform_container}>
            <span>
                <div className={styles.input_group}>
                    <input type="text" id="name" name='name' required value={formData.name} onChange={handleChange} />
                    <label htmlFor="name">Name</label>
                    <span className={styles.error}>{validationError.name}</span>
                </div>

                <div className={styles.input_group}>
                    <input type="text" id="email" name='email' required value={formData.email} onChange={handleChange} />
                    <label htmlFor="email">Email</label>
                    <span className={styles.error}>{validationError.email}</span>
                </div>
            </span>

            <div className={styles.input_group}>
                <input type="text" id="title" name='title' required value={formData.title} onChange={handleChange} />
                <label htmlFor="title">Title</label>
                <span className={styles.error}>{validationError.title}</span>
            </div>
            <div className={styles.input_group}>
                <textarea cols={30} rows={10} id="message" required name='message' value={formData.message} onChange={handleChange} />
                <label htmlFor="message">Message</label>
                <span className={styles.error}>{validationError.message}</span>
            </div>

            <Button
                type="submit"
                isLoading={isLoading}
                label='Send'
            />

            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </form>
    )
}

export default ContactForm