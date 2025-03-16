import React, { useState } from 'react'
import styles from './GamesSlider.module.scss'
import cover1 from '../../../../shared/assets/cover-game1.png'
import cover2 from '../../../../shared/assets/cover-game2.png'
import cover3 from '../../../../shared/assets/cover-game3.png'
import cover4 from '../../../../shared/assets/cover-game4.png'
import cover5 from '../../../../shared/assets/cover-game5.png'
import cover6 from '../../../../shared/assets/cover-game6.png'
import cover7 from '../../../../shared/assets/cover-game7.png'
import cover8 from '../../../../shared/assets/cover-game8.png'
import cover9 from '../../../../shared/assets/cover-game9.png'
import cover10 from '../../../../shared/assets/cover-game10.png'
import cover11 from '../../../../shared/assets/cover-game11.png'
import cover12 from '../../../../shared/assets/cover-game12.png'
import cover13 from '../../../../shared/assets/cover-game13.png'
import cover14 from '../../../../shared/assets/cover-game14.png'
import cover15 from '../../../../shared/assets/cover-game15.png'

const GamesSlider = () => {
    const images = []
    const dots = []

    for (let i = 1; i <= 15; i++) {
        const randomRating = (Math.random() * (5 - 1) + 1).toFixed(1) // Генерация случайного рейтинга от 1 до 5
        const randomImageId = Math.floor(Math.random() * 1000) // Генерация случайного идентификатора для изображения

        const image = {
            title: `Игра ${i}`,
            url: [
                cover1,
                cover2,
                cover3,
                cover4,
                cover5,
                cover6,
                cover7,
                cover8,
                cover9,
                cover10,
                cover11,
                cover12,
                cover13,
                cover14,
                cover15,
            ][(i - 1) % 15], // Генерация ссылки на случайное изображение с помощью Lorem Picsum
            rating: randomRating,
            genre: 'Приключения',
        }

        images.push(image)
        dots.push(i)
    }

    const [selectedIdx, setSelectedIdx] = useState(0)
    const [selectDot, setSelectedDot] = useState(1)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    const setItem = (idx: number) => {
        setSelectedIdx(idx)
        setSelectedDot(idx + 1)
    }

    const prevSlide = () => {
        setSelectedIdx((prevIdx) =>
            prevIdx === 0 ? images.length - 1 : prevIdx - 1
        )
        setSelectedDot((prevDot) =>
            prevDot === 1 ? images.length : prevDot - 1
        )
        setIsButtonDisabled(true)
        setTimeout(() => {
            setIsButtonDisabled(false)
        }, 1000)
    }

    const nextSlide = () => {
        setSelectedIdx((prevIdx) =>
            prevIdx === images.length - 1 ? 0 : prevIdx + 1
        )
        setSelectedDot((prevDot) =>
            prevDot === images.length ? 1 : prevDot + 1
        )
        setIsButtonDisabled(true)
        setTimeout(() => {
            setIsButtonDisabled(false)
        }, 800)
    }

    const oneStep = (n: number) => {
        setSelectedDot(n)
        setSelectedIdx(n - 1)
        setIsButtonDisabled(true)
        setTimeout(() => {
            setIsButtonDisabled(false)
        }, 500)
    }
    const classImage = (idx: number) => {
        return idx === selectedIdx
            ? `${styles['carousel__item']} ${styles['carousel__item--selected']}`
            : idx === selectedIdx - 1 ||
                (selectedIdx === 0 && idx === images.length - 1)
              ? `${styles['carousel__item']} ${styles['carousel__item--prev']}`
              : idx === selectedIdx + 1 ||
                  (selectedIdx === images.length - 1 && idx === 0)
                ? `${styles['carousel__item']} ${styles['carousel__item--next']}`
                : idx === selectedIdx - 2 ||
                    (selectedIdx === 0 && idx === images.length - 2) ||
                    (selectedIdx === 1 && idx === images.length - 1)
                  ? `${styles['carousel__item']} ${styles['carousel__item--prevLeftSecond']}`
                  : idx === selectedIdx + 2 ||
                      (selectedIdx === images.length - 2 && idx === 0) ||
                      (selectedIdx === images.length - 1 && idx === 1)
                    ? `${styles['carousel__item']} ${styles['carousel__item--nextRightSecond']}`
                    : idx === selectedIdx - 3 ||
                        (selectedIdx === 0 && idx === images.length - 3) ||
                        (selectedIdx === 1 && idx === images.length - 2) ||
                        (selectedIdx === 2 && idx === images.length - 1)
                      ? `${styles['carousel__item']} ${styles['carousel__item--hideLeft']}`
                      : idx === selectedIdx + 3 ||
                          (selectedIdx === images.length - 3 && idx === 0) ||
                          (selectedIdx === images.length - 2 && idx === 1) ||
                          (selectedIdx === images.length - 1 && idx === 2)
                        ? `${styles['carousel__item']} ${styles['carousel__item--hideRight']}`
                        : `${styles['carousel__item']} ${styles['carousel__item--simple']}`
    }

    return (
        <div className={styles['carousel']}>
            <div className={styles['carousel__head']}>
                <p className={styles['carousel__ganre']}>Приключения</p>
                <div className={styles['carousel__details']}>
                    <p className={styles['carousel__all']}>
                        Все ({images.length})
                    </p>
                    <div className={styles['carousel__action']}>
                        <button
                            disabled={isButtonDisabled}
                            className={styles['carousel__button']}
                            id="prev"
                            onClick={prevSlide}
                        >
                            <p className="visually-hidden">Предыдущая игра</p>
                            <svg
                                className={styles['carousel__arrow']}
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="24"
                                viewBox="0 0 14 24"
                                fill="none"
                            >
                                <path
                                    d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM3 10.5H2L2 13.5H3V10.5Z"
                                    fill="#ADADAC"
                                />
                            </svg>
                        </button>
                        <div className={styles['carousel__dots']}>
                            {dots.map((dot) => (
                                <button
                                    key={dot}
                                    disabled={isButtonDisabled}
                                    className={
                                        selectDot === dot
                                            ? `${styles['carousel__button']} ${styles['carousel__button--active']}`
                                            : `${styles['carousel__button']} ${styles['carousel__button--circle']}`
                                    }
                                    id="step1"
                                    onClick={
                                        selectDot !== dot
                                            ? () => oneStep(dot)
                                            : undefined
                                    }
                                >
                                    <p className={'visually-hidden'}>
                                        Один шаг на несколько объектов вперед
                                    </p>
                                </button>
                            ))}
                        </div>
                        <button
                            disabled={isButtonDisabled}
                            className={styles['carousel__button']}
                            id="next"
                            onClick={nextSlide}
                        >
                            <p className="visually-hidden">Следующая игра</p>
                            <svg
                                className={styles['carousel__arrow']}
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="24"
                                viewBox="0 0 14 24"
                                fill="none"
                            >
                                <path
                                    d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97918 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM11 13.5L12 13.5L12 10.5L11 10.5L11 13.5Z"
                                    fill="#ADADAC"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <ul className={styles['carousel__list']}>
                {images.map((image, idx) => (
                    <div
                        key={idx}
                        className={classImage(idx)}
                        onClick={() => setItem(idx)}
                    >
                        <img
                            className={styles['carousel__image']}
                            src={image.url}
                            alt={`Slide ${idx + 1}`}
                        />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default GamesSlider
