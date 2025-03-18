import React from 'react'
import styles from './Home.module.scss'
import Hero from './Hero/Hero'
import Courses from './Courses/Courses'
import Collection from './Collection/Collection'
import Genre from './Genre/Genre'
import Functions from './Functions/Functions'
import { Activities } from './Activities/Activities'
import News from './News/News'
import ProgramExample from './ProgramExample/ProgramExample'

const Home = () => {
    return (
        <main className={styles['home__wrapper']}>
            <Hero />
            <News />
            <Courses />
            <Activities />
            <ProgramExample />
            <Collection />
            <Genre />
            <Functions />
        </main>
    )
}

export default Home
