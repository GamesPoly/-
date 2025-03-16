import React from 'react'
import Preview from './Preview/Preview'
import styles from './AboutUs.module.scss'
import WeAre from './WeAre/WeAre'
import CanDo from './CanDo/CanDo'
import ForDevelopers from './ForDevelopers/ForDevelopers'
import lines from './lines1.svg'
const AboutUs = () => {
    return (
        <main
            className={styles['about-us__wrapper']}
            style={{ backgroundImage: `url(${lines})` }}
        >
            <Preview />
            <WeAre />
            <CanDo />
            <ForDevelopers />
        </main>
    )
}

export default AboutUs
