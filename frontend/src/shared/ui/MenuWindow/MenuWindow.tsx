import React, { useState, useEffect } from 'react'
import styles from './MenuWindow.module.scss'
import { Link, useLocation } from 'react-router-dom'
import bgGrid from '../../assets/bg-grid.svg'

type MenuWindowProps = {
    isOpen: boolean
    closeMenu: any
}

const MenuWindow = ({ isOpen, closeMenu }: MenuWindowProps) => {
    const location = useLocation()
    const [currentPath, setCurrentPath] = useState(location.pathname)

    useEffect(() => {
        setCurrentPath(location.pathname)
    }, [location.pathname])
    return (
        <div
            className={`${styles['menu-window']} ${
                isOpen ? styles['menu-window--open'] : ''
            }`}
        >
            <p className={styles['menu-window__title']}>Навигация по сайту</p>
            <ul className={styles['menu-window__list']}>
                <li className={styles['menu-window__item']}>
                    <Link
                        to="/"
                        className={
                            currentPath === '/'
                                ? `${styles['menu-window__link']} ${styles['menu-window__link--active']}`
                                : styles['menu-window__link']
                        }
                    >
                        Главная
                        <p className={styles['menu-window__number']}>/01</p>
                    </Link>
                </li>
                <li className={styles['menu-window__item']}>
                    <Link
                        to="/games"
                        className={
                            currentPath === '/games'
                                ? `${styles['menu-window__link']} ${styles['menu-window__link--active']}`
                                : styles['menu-window__link']
                        }
                    >
                        Каталог игр
                        <p className={styles['menu-window__number']}>/02</p>
                    </Link>
                </li>
                <li className={styles['menu-window__item']}>
                    <Link
                        to="/teams"
                        className={
                            currentPath === '/teams'
                                ? `${styles['menu-window__link']} ${styles['menu-window__link--active']}`
                                : styles['menu-window__link']
                        }
                    >
                        Команды
                        <p className={styles['menu-window__number']}>/03</p>
                    </Link>
                </li>
                <li className={styles['menu-window__item']}>
                    <Link
                        to="/post-form"
                        className={
                            currentPath === '/post-form'
                                ? `${styles['menu-window__link']} ${styles['menu-window__link--active']}`
                                : styles['menu-window__link']
                        }
                    >
                        Публикация
                        <p className={styles['menu-window__number']}>/04</p>
                    </Link>
                </li>
                <li className={styles['menu-window__item']}>
                    <Link
                        to="/profile"
                        className={
                            currentPath === '/profile'
                                ? `${styles['menu-window__link']} ${styles['menu-window__link--active']}`
                                : styles['menu-window__link']
                        }
                    >
                        Мой профиль
                        <p className={styles['menu-window__number']}>/05</p>
                    </Link>
                </li>
            </ul>
            <button
                className={styles['menu-window__button']}
                onClick={closeMenu}
            >
                <svg
                    className={styles['menu-window__button_icon']}
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                >
                    <circle cx="25" cy="25" r="25" fill="#2F2F2F" />
                    <path
                        d="M19 19L32 32 M19 32L32 19"
                        stroke="#EFEFED"
                        strokeWidth="1.88679"
                        strokeLinecap="round"
                    />
                </svg>
            </button>
            <p className={styles['menu-window__copyright']}>
                ©2023, Московский политехнический университет
            </p>
            <img
                src={bgGrid}
                alt="Grid"
                className={styles['menu-window__bg']}
            />
        </div>
    )
}

export default MenuWindow
