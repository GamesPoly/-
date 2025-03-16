import React, { FC, useState } from 'react'
import styles from './GameBanner.module.scss'
import GameBannerItem from './GameBannerItem/GameBannerItem'
import SliderControls from './SliderControls/SliderControls'
import banner from '../../../shared/assets/cover-game18.png'
import cover1 from '../../../shared/assets/cover-game4.png'

function GameBanner() {
    const games = [
        {
            id: 1,
            image: banner,
            name: 'OMORI',
            desc: 'Исследуйте странный мир, полный ярких друзей и врагов. Когда придет время, выбранный вами путь определит вашу судьбу... и, возможно, судьбу других людей.',
            tags: ['Симулятор', 'MosPolyJam2023'],
            bgColor: '#ffffff',
        },
        {
            id: 2,
            image: cover1,
            name: 'Neo_Cat',
            desc: 'чайте новые механики, чтобы устранять баги эффективнее. Вперёд НЕО КОТ, я в тебя верю!',
            tags: ['Симуляция', 'MosPolyJam2023'],
            bgColor: '#00000',
        },
        {
            id: 3,
            image: banner,
            name: 'Neo_Cat',
            desc: 'чайте новыеasdasdasdasdasdasdas механики, чтобы устранять баги эффективнее. Вперёд НЕО КОТ, я в тебя верю!',
            tags: ['Симуляция', 'MosPolyJam2023'],
            bgColor: '#00000',
        },
        {
            id: 4,
            image: banner,
            name: 'Neo_Cat',
            desc: 'чайте новыеasdasdasdasdasdasdas механики, чтобы устранять баги эффективнее. Вперёд НЕО КОТ, я в тебя верю!',
            tags: ['Симуляция', 'MosPolyJam2023'],
            bgColor: '#00000',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevSlide = () => {
        setCurrentIndex(
            currentIndex === 0 ? games.length - 1 : currentIndex - 1
        )
    }

    const goToNextSlide = () => {
        setCurrentIndex((currentIndex + 1) % games.length)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    return (
        <section className={styles['game-banner']}>
            <div
                className={styles['game-banner__main']}
                style={{
                    backgroundColor: games[currentIndex].bgColor,
                    backgroundImage: `url(${games[currentIndex].image})`,
                }}
            >
                <button
                    className={styles['game-banner__prev']}
                    onClick={goToPrevSlide}
                >
                    <svg
                        width="23"
                        height="15"
                        viewBox="0 0 23 15"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentcolor"
                    >
                        <path d="M1.03126 6.79289C0.640736 7.18342 0.640736 7.81658 1.03126 8.20711L7.39522 14.5711C7.78575 14.9616 8.41891 14.9616 8.80943 14.5711C9.19996 14.1805 9.19996 13.5474 8.80943 13.1569L3.15258 7.5L8.80943 1.84315C9.19996 1.45262 9.19996 0.819457 8.80943 0.428932C8.41891 0.0384078 7.78575 0.0384078 7.39522 0.428932L1.03126 6.79289ZM22.0645 6.5L1.73837 6.5V8.5L22.0645 8.5V6.5Z" />
                    </svg>
                </button>
                <GameBannerItem game={games[currentIndex]} />
                <button
                    className={styles['game-banner__next']}
                    onClick={goToNextSlide}
                >
                    <svg
                        width="23"
                        height="15"
                        viewBox="0 0 23 15"
                        xmlns="http://www.w3.org/2000/svg "
                        fill="currentcolor"
                    >
                        <path d="M21.9687 8.20711C22.3593 7.81658 22.3593 7.18342 21.9687 6.79289L15.6048 0.428932C15.2143 0.0384078 14.5811 0.0384078 14.1906 0.428932C13.8 0.819457 13.8 1.45262 14.1906 1.84315L19.8474 7.5L14.1906 13.1569C13.8 13.5474 13.8 14.1805 14.1906 14.5711C14.5811 14.9616 15.2143 14.9616 15.6048 14.5711L21.9687 8.20711ZM0.935547 8.5H21.2616V6.5H0.935547V8.5Z" />
                    </svg>
                </button>
            </div>
            <SliderControls
                totalSlides={games.length}
                currentSlide={currentIndex}
                goToSlide={goToSlide}
                goToPrevSlide={goToPrevSlide}
                goToNextSlide={goToNextSlide}
            />
        </section>
    )
}

export default GameBanner
