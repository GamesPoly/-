import React from 'react'
import styles from './Home.module.scss'
import Hero from './Hero/Hero'
import Collection from './Collection/Collection'
import Genre from './Genre/Genre'
import Functions from './Functions/Functions'
import { Activities } from './Activities/Activities'
import News from './News/News'

const Home = () => {
    return (
        <main className={styles['home__wrapper']}>
            <Hero />
            <News />
            <Activities />
            <Collection />
            <Genre />
            <Functions />
        </main>
    )
}

export default Home
