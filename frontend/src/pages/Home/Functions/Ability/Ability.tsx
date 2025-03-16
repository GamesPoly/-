import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Ability.module.scss'

type Ability = {
    title: string
    number: number
    desc: string
    url: string
    image: any
}

type AbilityProps = {
    data: Ability
}

const Ability = ({ data }: AbilityProps) => {
    const { title, number, desc, url, image } = data

    return (
        <Link
            to={url}
            className={`${styles['functions__ability']} ${styles['ability']}`}
        >
            <div className={styles['ability__info']}>
                <p className={styles['ability__number']}>{number}</p>
                <h3 className={styles['ability__title']}>{title}</h3>
            </div>
            {image && (
                <img
                    src={image}
                    alt="Cover for ability"
                    className={
                        number === 4
                            ? `${styles['ability__image']} ${styles['ability__image--avatar']}`
                            : number === 1
                              ? `${styles['ability__image']} ${styles['ability__image--all']}`
                              : styles['ability__image']
                    }
                />
            )}
            <div className={styles['ability__action']}>
                <p className={styles['ability__desc']}>{desc}</p>
                <svg
                    className={styles['ability__icon']}
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                >
                    <path
                        d="M25.5 18.4167V26.9167C25.5 27.6681 25.2015 28.3888 24.6701 28.9201C24.1388 29.4515 23.4181 29.75 22.6667 29.75H7.08333C6.33189 29.75 5.61122 29.4515 5.07986 28.9201C4.54851 28.3888 4.25 27.6681 4.25 26.9167V11.3333C4.25 10.5819 4.54851 9.86122 5.07986 9.32986C5.61122 8.79851 6.33189 8.5 7.08333 8.5H15.5833"
                        stroke="#ADADAC"
                        strokeWidth="2.83333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        className={styles['ability__icon_arrow']}
                        d="M21.25 4.25H29.75V12.75 M14.1665 19.8333L29.7498 4.25"
                        strokeWidth="2.83333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </Link>
    )
}

export default Ability
