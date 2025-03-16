import React from 'react'
import styles from './Catalog.module.scss'
import { SkeletonTheme } from 'react-loading-skeleton'
import { CatalogFiltersProvider } from '../../shared/lib/context/CatalogFiltersProvider'
import CatalogGamesContent from './components/CatalogGamesContent/CatalogGamesContent'

function Catalog() {
    return (
        <CatalogFiltersProvider>
            <SkeletonTheme baseColor="#202020" highlightColor="#fff">
                <main className={styles['catalog']}>
                    <div className={styles['catalog__wrapper']}>
                        <CatalogGamesContent />
                    </div>
                </main>
            </SkeletonTheme>
        </CatalogFiltersProvider>
    )
}

export default Catalog
