import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../shared/assets/logo.svg'
import Search from './Search/Search'
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
                    <Link to="/" className={styles.header__link}>
                        <img
                            src={logo}
                            alt="PolyGames Logo Image"
                            className={styles.header__logo}
                        />
                    </Link>
                    <MenuButton clickButton={openMenu} />
                </div>
            </div>
        </header>
    )
}

export default Header
