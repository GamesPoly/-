import React from 'react'
import styles from './SliderControls.module.scss'

type SliderControlsProps = {
    totalSlides: number
    currentSlide: number
    goToSlide: (index: number) => void
    goToPrevSlide: () => void
    goToNextSlide: () => void
}

function SliderControls({
    totalSlides,
    currentSlide,
    goToSlide,
    goToPrevSlide,
    goToNextSlide,
}: SliderControlsProps) {
    return (
        <div className={styles['slider-controls']}>
            <button
                className={styles['slider-controls__prev']}
                onClick={goToPrevSlide}
            >
                <svg
                    width="14"
                    height="24"
                    viewBox="0 0 14 24"
                    fill="currentcolor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.93934 10.9393ZM3 10.5H2L2 13.5H3V10.5Z"
                        fill="#CACACA"
                    />
                </svg>
            </button>
            <div className={styles['slider-controls__dots']}>
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <span
                        key={index}
                        className={`${styles['slider-controls__dot']} ${currentSlide === index ? styles['active'] : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
            <button
                className={styles['slider-controls__next']}
                onClick={goToNextSlide}
            >
                <svg
                    width="14"
                    height="24"
                    viewBox="0 0 14 24"
                    fill="currentcolor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97918 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM11 13.5L12 13.5L12 10.5L11 10.5L11 13.5Z"
                        fill="#CACACA"
                    />
                </svg>
            </button>
        </div>
    )
}

export default SliderControls
