import React, { useState } from 'react'
import styles from './Registration.module.scss'
import EmailInput from '../Auth/EmailInput/EmailInput'
import PasswordInput from '../Auth/PasswordInput/PasswordInput'
import git from '../../shared/assets/git-icon.svg'
import google from '../../shared/assets/google-icon.svg'
import vk from '../../shared/assets/vk-icon.svg'
import AuthFormInput from '../Auth/AuthFormInput/AuthFormInput'

function Registration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const handleEmailChange = (newEmail: string) => {
        setEmail(newEmail)
    }

    const handlePasswordChange = (newPassword: string) => {
        setPassword(newPassword)
    }

    const handlePasswordRepeatChange = (passwordRepeat: string) => {
        setPasswordRepeat(passwordRepeat)
    }

    return (
        <main className={styles['registration__wrapper']}>
            <h1>Регистрация в PolyGames</h1>
            <form className={styles['registration__form']} method="POST">
                <div className={styles['registration__form-main']}>
                    <div className={styles['input__fields-block']}>
                        <AuthFormInput
                            onInputChange={handleEmailChange}
                            title="Email пользователя"
                        />
                        <AuthFormInput
                            onInputChange={handlePasswordChange}
                            title="Пароль"
                        />
                        <AuthFormInput
                            onInputChange={handlePasswordRepeatChange}
                            title="Подтверждение пароля"
                        />
                        <div className={styles['registration__btns']}>
                            <div className={styles['registration__btn']}>
                                <p>Зарегистрироваться</p>
                                <div className={styles['btn__circle']}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="14"
                                        viewBox="0 0 15 14"
                                        fill="none"
                                        className={styles['btn__arrow']}
                                    >
                                        <path
                                            d="M14.3334 7.58336C14.6555 7.26118 14.6555 6.73882 14.3334 6.41664L9.0831 1.16637C8.76091 0.844186 8.23855 0.844186 7.91637 1.16637C7.59419 1.48855 7.59419 2.01091 7.91637 2.3331L12.5833 7L7.91637 11.6669C7.59419 11.9891 7.59419 12.5114 7.91637 12.8336C8.23855 13.1558 8.76091 13.1558 9.0831 12.8336L14.3334 7.58336ZM0.25 7.825H13.75V6.175H0.25V7.825Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['other__registration__btns']}>
                    <hr></hr>
                    <p>Зарегистрироваться через:</p>
                    <div className={styles['btns']}>
                        <img
                            src={vk}
                            alt=""
                            className={styles['aside-settings__icon']}
                        />
                        <img
                            src={google}
                            alt=""
                            className={styles['aside-settings__icon']}
                        />
                        <img
                            src={git}
                            alt=""
                            className={styles['aside-settings__icon']}
                        />
                    </div>
                </div>
            </form>
            <div className={styles['link__registr']}>
                <h2>В первый раз в PolyGames?</h2>
                <p>Создать аккаунт</p>
            </div>
        </main>
    )
}

export default Registration
