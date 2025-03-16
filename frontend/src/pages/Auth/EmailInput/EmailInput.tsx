import React, { FC, useState } from 'react'
import styles from './EmailInput.module.scss'

interface EmailInputProps {
    onEmailChange: (email: string) => void
}

const EmailInput: FC<EmailInputProps> = ({ onEmailChange }) => {
    const [email, setEmail] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value
        setEmail(newEmail)
        onEmailChange(newEmail)
    }

    return (
        <div className="email">
            <label className={styles['email__label']} htmlFor="email">
                Email пользователя
            </label>
            <input
                type="email"
                name="email"
                className={styles['email__input']}
                placeholder="Email пользователя"
                value={email}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default EmailInput
