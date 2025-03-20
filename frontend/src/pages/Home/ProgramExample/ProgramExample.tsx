import React, { useState } from 'react'
import styles from './ProgramExample.module.scss'
import { ArrowLink } from '../../../shared/ui/ArrowLink/ArrowLink'
const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
        className={styles.arrow}
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="14"
        viewBox="0 0 15 14"
        fill="none"
        style={{
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
        }}
    >
        <path
            d="M14.3334 7.58336C14.6555 7.26118 14.6555 6.73882 14.3334 6.41664L9.0831 1.16637C8.76091 0.844186 8.23855 0.844186 7.91637 1.16637C7.59419 1.48855 7.59419 2.01091 7.91637 2.3331L12.5833 7L7.91637 11.6669C7.59419 11.9891 7.59419 12.5114 7.91637 12.8336C8.23855 13.1558 8.76091 13.1558 9.0831 12.8336L14.3334 7.58336ZM0.25 7.825H13.75V6.175H0.25V7.825Z"
            fill="white"
        />
    </svg>
)
const ProgramExample = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <section className={styles.program}>
            <h2 className={styles.program__header}>
                <span className={styles.program__firstLine}>
                    Программное обеспечение
                </span>
                <br />
                <span className={styles.program__secondLine}>
                    игровой компьютерной индустрии
                </span>
                <br />
                <span className={styles.program__thirdLine}>
                    в Московском Политехе
                </span>
            </h2>
            <div className={styles.program__content}>
                <div className={styles.program__card}>
                    <h3 className={styles.program__cardHeader}>О программе</h3>
                    <p className={styles.program__cardText}>
                        Игровая индустрия — одна из самых коммерчески выгодных
                        отраслей IT, в которой наблюдается дефицит
                        квалифицированных кадров в области разработки
                        программного обеспечения. Выпускники этой програм...
                    </p>
                    <ArrowLink to="/" className={styles.regbtn} />
                </div>
                <div className={styles.faqContainer}>
                    <h2 className={styles.title}>Вопросы о программе</h2>
                    <ul className={styles.faqList}>
                        <li className={styles.faqItem}>
                            <button
                                className={styles.question}
                                onClick={() => toggleFaq(0)}
                            >
                                - На каком профиле больше программирования?
                                <ArrowIcon isOpen={openIndex === 0} />
                            </button>
                            {openIndex === 0 && (
                                <p className={styles.answer}>
                                    На всех. Модуль программирования общий:
                                    <br />- основы алгоритмизации и
                                    программирования;
                                    <br />- введение в программирование;
                                    <br />- объектно-ориентированное
                                    программирование;
                                    <br />- основы современных алгоритмов;
                                    <br />- технология кроссплатформенного
                                    программирования;
                                    <br />- программирование для мобильных
                                    устройств.
                                </p>
                            )}
                        </li>
                        <li className={styles.faqItem}>
                            <button
                                className={styles.question}
                                onClick={() => toggleFaq(1)}
                            >
                                - В чем отличие между профилями?
                                <ArrowIcon isOpen={openIndex === 1} />
                            </button>
                            {openIndex === 1 && (
                                <p className={styles.answer}>
                                    Ответ на этот вопрос...
                                </p>
                            )}
                        </li>
                        <li className={styles.faqItem}>
                            <button
                                className={styles.question}
                                onClick={() => toggleFaq(2)}
                            >
                                - Помогаете ли вы с трудоустройством?
                                <ArrowIcon isOpen={openIndex === 2} />
                            </button>
                            {openIndex === 2 && (
                                <p className={styles.answer}>
                                    Ответ на этот вопрос...
                                </p>
                            )}
                        </li>
                        <li className={styles.faqItem}>
                            <button
                                className={styles.question}
                                onClick={() => toggleFaq(3)}
                            >
                                - Если нет навыков программирования, что делать?
                                <ArrowIcon isOpen={openIndex === 3} />
                            </button>
                            {openIndex === 3 && (
                                <p className={styles.answer}>
                                    Ответ на этот вопрос...
                                </p>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProgramExample
