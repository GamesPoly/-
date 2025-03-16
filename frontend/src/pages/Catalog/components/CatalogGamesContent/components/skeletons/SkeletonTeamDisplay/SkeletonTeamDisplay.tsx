import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import styles from './SkeletonTeamDisplay.module.scss'

export default function SkeletonTeamDisplay({}) {
    return (
        <>
            <div className={styles['skeleton-display__container']}>
                <div className={styles['skeleton-display__members']}>
                    <Link
                        to={`/`}
                        key={1}
                        className={styles['skeleton-display__member-link']}
                    >
                        <Skeleton
                            className={styles['skeleton-display__member-img']}
                        />
                    </Link>
                    <Link
                        to={`/`}
                        key={1}
                        className={styles['skeleton-display__member-link']}
                    >
                        <Skeleton
                            className={styles['skeleton-display__member-img']}
                        />
                    </Link>
                    <Link
                        to={`/`}
                        key={1}
                        className={styles['skeleton-display__member-link']}
                    >
                        <Skeleton
                            className={styles['skeleton-display__member-img']}
                        />
                    </Link>
                    <Link
                        to={`/`}
                        key={1}
                        className={styles['skeleton-display__member-link']}
                    >
                        <Skeleton
                            className={styles['skeleton-display__member-img']}
                        />
                    </Link>
                </div>
                <div className={styles['skeleton-display__right']}>
                    <p className={styles['skeleton-display__team-label']}>
                        <Skeleton width={'85px'} />
                    </p>
                    <p className={styles['skeleton-display__team-name']}>
                        <Skeleton width={'160px'} />
                    </p>
                </div>
            </div>
        </>
    )
}
