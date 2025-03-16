import React from 'react'
import styles from './Button.module.scss'
import arrow from '../../assets/arrow2.svg'

interface ButtonProps {
    text?: string
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button className={styles['styled-button']}>
            <img
                src={arrow}
                alt="Arrow"
                className={styles['styled-button__arrow']}
            />
            {text}
        </button>
    )
}

export default Button
