import React from 'react'
import styles from './Home.module.scss'
import Hero from './Hero/Hero'
import Collection from './Collection/Collection'
import Genre from './Genre/Genre'
import Functions from './Functions/Functions'
import ProgramExample from './ProgramExample/ProgramExample'
const Home = () => {
    return (
        <main className={styles['home__wrapper']}>
            <Hero />
            <ProgramExample />
            <Collection />
            <Genre />
            <Functions />
        </main>
    )
}

export default Home
