import React, { FC, useState } from 'react'
import styles from './PasswordInput.module.scss'

interface PasswordInputProps {
    onPasswordChange: (password: string) => void
}

const PasswordInput: FC<PasswordInputProps> = ({ onPasswordChange }) => {
    const [password, setPassword] = useState('')

    const hanleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value
        setPassword(newPassword)
        onPasswordChange(newPassword)
    }

    return (
        <div className={styles['password']}>
            <label className={styles['password__label']} htmlFor="password">
                Пароль
            </label>
            <input
                type="password"
                name="password"
                className={styles['password__input']}
                placeholder="Пароль"
                value={password}
                onChange={hanleInputChange}
            />
        </div>
    )
}

export default PasswordInput
