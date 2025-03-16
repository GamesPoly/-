import React from 'react'
import styles from './Footer.module.scss'
import logo from '../../../shared/assets/logo.svg'
import vkLogo from '../../../shared/assets/vk.svg'
import tgLogo from '../../../shared/assets/tg.svg'
import { Link, NavLink } from 'react-router-dom'

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <nav className={`${styles.footer__nav} ${styles.footer__wrapper}`}>
                <Link className={styles.footer__link} to={'/'}>
                    <img
                        src={logo}
                        alt="PolyGames Logo"
                        className={styles.footer__logo}
                    />
                </Link>
                <ul className={styles.footer__links}>
                    <li>
                        <NavLink className={styles.footer__link} to={'/'}>
                            О нас
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.footer__link} to={'/'}>
                            FAQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.footer__link} to={'/'}>
                            Пользовательское соглашение
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.footer__link} to={'/'}>
                            Контакты
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className={styles.footer__link} to={'/'}>
                            Разработчикам
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className={styles.footer__link} to={'/'}>
                            Политика конфиденциальности
                        </NavLink>
                    </li>
                </ul>
                <ul className={styles.footer__socials}>
                    <li>
                        <Link className={styles.footer__link} to={'/'}>
                            <img src={vkLogo} alt="Иконка VK" />
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.footer__link} to={'/'}>
                            <img src={tgLogo} alt="Иконка TG" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
