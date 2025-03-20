import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../shared/assets/logo.svg'
import polyLogo from '../../../shared/assets/poly-logo.svg'
import MenuButton from './MenuButton/MenuButton'
import styles from './Header.module.scss'

interface HeaderProps {
    openMenu: () => void
    showHeader: boolean
}

const Header: React.FC<HeaderProps> = ({ openMenu, showHeader }) => {
    return (
        <header
            className={`${styles.header} ${
                showHeader ? styles.visible : styles.hidden
            }`}
        >
            <div className={styles.header__wrapper}>
                <div className={styles.header__details}>
                    <div className={styles.logos}>
                        <Link to="/" className={styles.header__link}>
                            <img
                                src={polyLogo}
                                alt="PolyGames Logo Image"
                                className={styles.header__logo}
                            />
                        </Link>
                        <Link to="/" className={styles.header__link}>
                            <img
                                src={logo}
                                alt="PolyGames Logo Image"
                                className={styles.header__logo}
                            />
                        </Link>
                    </div>
                    <div className={styles.header__nav}>
                        <Link className={styles.header__nav__link} to="/news">
                            Новости
                        </Link>
                        <Link className={styles.header__nav__link} to="/games">
                            Каталог игр
                        </Link>
                        <Link className={styles.header__nav__link} to="/teams">
                            Команды
                        </Link>
                        <Link
                            className={styles.header__nav__link}
                            to="/about-us"
                        >
                            О нас
                        </Link>
                        <Link className={styles.header__nav__link} to="/auth">
                            Личный кабинет
                        </Link>
                    </div>
                    <MenuButton clickButton={openMenu} />
                </div>
            </div>
        </header>
    )
}

export default Header
