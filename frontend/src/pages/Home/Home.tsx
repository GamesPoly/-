import React from 'react'
import styles from './Home.module.scss'
import Hero from './Hero/Hero'
import Courses from './Courses/Courses'
import Collection from './Collection/Collection'
import Genre from './Genre/Genre'
import Functions from './Functions/Functions'
import { Activities } from './Activities/Activities'
const Home = () => {
    return (
        <main className={styles['home__wrapper']}>
            <Hero />
            <Courses />
            <Activities />
            <Collection />
            <Genre />
            <Functions />
        </main>
    )
}

export default Home
