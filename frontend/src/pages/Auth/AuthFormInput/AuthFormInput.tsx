import React, { FC, useState } from 'react'
import styles from './AuthFormInput.module.scss'

interface EmailInputProps {
    onInputChange: (email: string) => void
    title: string
}

const AuthFormInput: FC<EmailInputProps> = ({ onInputChange, title }) => {
    const [email, setEmail] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value
        setEmail(newEmail)
        onInputChange(newEmail)
    }

    return (
        <div className={styles['input-block']}>
            <label className={styles['input-block__label']} htmlFor="email">
                {title}
            </label>
            <input
                type="email"
                name="email"
                className={styles['input-block__input']}
                placeholder={title}
                value={email}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default AuthFormInput
