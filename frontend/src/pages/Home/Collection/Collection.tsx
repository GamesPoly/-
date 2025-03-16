import React from 'react'
import styles from './Collection.module.scss'
import CollectionHead from './Head/Head'
import CollectionBody from './Body/Body'
// import decorateStarMini from '@assets/decorate-star-mini.svg';
const Collection = () => {
    return (
        <section id="popular" className={styles['collection']}>
            <CollectionHead />
            <CollectionBody />
        </section>
    )
}

export default Collection
