import React from 'react'
import styles from './SkeletonSlider.module.scss'
import AdBanner from '../../AdSlider/components/AdBanner/AdBanner'
import AdBand from '../../AdSlider/components/AdBand/AdBand'

function SkeletonSlider() {
    return (
        <section className={styles['ads-slider']}>
            <AdBanner gameAdObj={{}} />
            <ul className={styles['ads-slider__list']}>
                <li className={styles['ads-slider__item']}>
                    <AdBand gameAdObj={{}} />
                </li>
                <li className={styles['ads-slider__item']}>
                    <AdBand gameAdObj={{}} />
                </li>
                <li className={styles['ads-slider__item']}>
                    <AdBand gameAdObj={{}} />
                </li>
                <li className={styles['ads-slider__item']}>
                    <AdBand gameAdObj={{}} />
                </li>
            </ul>
        </section>
    )
}

export default SkeletonSlider
