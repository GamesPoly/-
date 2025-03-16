import React from 'react'

import { Link } from 'react-router-dom'
import arrow from './arrow.svg'

import styles from './ArrowLink.module.scss'

export const ArrowLink = ({
    to,
    className,
    small = false,
}: {
    to: string
    className?: string
    small?: boolean
}) => {
    return (
        <Link
            to={to}
            className={
                small
                    ? `${styles.link} ${className} ${styles.link_small}`
                    : `${styles.link} ${className}`
            }
        >
            <img
                style={
                    small
                        ? { width: '20px', height: '20px', marginLeft: '2.5px' }
                        : {}
                }
                src={arrow}
                alt=""
            />
            Подробнее
        </Link>
    )
}
