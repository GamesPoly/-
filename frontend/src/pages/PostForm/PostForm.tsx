import React, { useState, ChangeEvent, useRef, MutableRefObject } from 'react'
import styles from './PostForm.module.scss'
import { Sidebar } from './AsideMenu/Sidebar'

interface Platforms {
    windows: boolean
    macos: boolean
    linux: boolean
}

interface SystemRequirements {
    cpu: string
    ram: string
    gpu: string
    hardDiskSpace: string
    os: string
    additionalRequirements: string
}

interface ContactInfo {
    developers: string
    contacts: string
}

interface Genres {}

interface SidebarProps {
    activeSection: string
    setActiveSection: (section: string) => void
}

function PostForm() {
    const sections = [
        { id: 1, name: 'Основная информация' },
        { id: 2, name: 'Изображения продукта' },
        { id: 3, name: 'Файлы игры' },
    ]
    const [activeSectionId, setActiveSectionId] = useState<number>(1)

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [shortDescription, setShortDescription] = useState<string>('')
    const [keywords, setKeywords] = useState<string>('')
    const [tags, setTags] = useState<string>('')

    const [platforms, setPlatforms] = useState<Platforms>({
        windows: false,
        macos: false,
        linux: false,
    })

    const [requirements, setRequirements] = useState<SystemRequirements>({
        cpu: '',
        ram: '',
        gpu: '',
        hardDiskSpace: '',
        os: '',
        additionalRequirements: '',
    })

    const [contactInfo, setContactInfo] = useState<ContactInfo>({
        developers: '',
        contacts: '',
    })

    const [genres, setGenres] = useState<string>('')

    const [mainGenre, setMainGenre] = useState<string>('')
    const [playersNumber, setPlayersNumber] = useState<string>('')
    const [playersCount, setPlayersCount] = useState<string>('')
    const [gameAwards, setGameAwards] = useState<string>('')

    const coverFileInputRef: MutableRefObject<null | HTMLInputElement> =
        useRef<null | HTMLInputElement>(null)
    const [coverFileInputOnHover, setCoverFileInputOnHover] =
        useState<boolean>(false)
    const [coverFileInputFilled, setCoverFileInputFilled] =
        useState<boolean>(false)

    const handleProceed = (sectionId: number) => {
        setActiveSectionId(sectionId)
    }

    const handleInputChange =
        (setState: React.Dispatch<React.SetStateAction<string>>) =>
        (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setState(event.target.value)
        }

    const renderSection = (sectionId: number) => {
        switch (sectionId) {
            case 1:
                return (
                    <div className={styles['post-form__section']}>
                        <h2 className={styles['post-form__header']}>
                            Выгрузка игры
                        </h2>
                        <div className={styles['post-form__element']}>
                            <label
                                htmlFor="name"
                                className={styles['element__label']}
                            >
                                Название игры
                            </label>
                            <p className={styles['element__desc']}>
                                Максимальная длина — 46 символов.
                            </p>
                            <input
                                onChange={handleInputChange(setTitle)}
                                className={styles['element__input']}
                                type="text"
                                id="name"
                            />
                        </div>
                        <div className={styles['post-form__element']}>
                            <label
                                htmlFor="desc"
                                className={styles['element__label']}
                            >
                                Описание игры
                            </label>
                            <p className={styles['element__desc']}>
                                Описание особенностей, уникального сюжета и
                                аспектов вашей игры, которое будет отображаться
                                на странице игры. Максимальная длина текста —
                                1000 символов.
                            </p>
                            <textarea
                                onChange={handleInputChange(setDescription)}
                                className={`${styles['element__input']} ${styles['element__textarea-full']}`}
                                id="desc"
                            ></textarea>
                        </div>
                        <div className={styles['post-form__element']}>
                            <label
                                htmlFor="short_desc"
                                className={styles['element__label']}
                            >
                                Краткое описание
                            </label>
                            <p className={styles['element__desc']}>
                                Краткое описание вашей игры, которое будет
                                отображаться в каталоге игр и превью.
                                Максимальная длина текста — 300 символов.
                            </p>
                            <textarea
                                onChange={handleInputChange(
                                    setShortDescription
                                )}
                                className={`${styles['element__input']} ${styles['element__textarea-short']}`}
                                id="short_desc"
                            ></textarea>
                        </div>
                        <div className={styles['post-form__element']}>
                            <label
                                htmlFor="keywords"
                                className={styles['element__label']}
                            >
                                Ключевые слова
                            </label>
                            <p className={styles['element__desc']}>
                                Введите подходящие ключевые слова, по которым
                                пользователь сможет найти вашу игру. Разделите
                                слова запятой.
                            </p>
                            <input
                                onChange={handleInputChange(setKeywords)}
                                className={styles['element__input']}
                                type="text"
                                id="keywords"
                            />
                        </div>
                        <div className={styles['post-form__element']}>
                            <label
                                htmlFor="tags"
                                className={styles['element__label']}
                            >
                                Тэги
                            </label>
                            <p className={styles['element__desc']}>
                                Введите подходящие тэги, которые будут описывать
                                особенности вашей игры.
                            </p>
                            <input
                                onChange={handleInputChange(setTags)}
                                className={styles['element__input']}
                                type="text"
                                id="tags"
                            />
                        </div>
                        <div className={styles['post-form__element']}>
                            <p className={styles['element__label']}>
                                Поддерживаемые платформы
                            </p>
                            <div className={styles['element__checkbox-block']}>
                                <input
                                    className={
                                        styles['element__input-checkbox']
                                    }
                                    type="checkbox"
                                    id="windows"
                                />
                                <label
                                    htmlFor="windows"
                                    className={styles['element__label']}
                                >
                                    Windows
                                </label>
                            </div>
                            <div className={styles['element__checkbox-block']}>
                                <input
                                    className={
                                        styles['element__input-checkbox']
                                    }
                                    type="checkbox"
                                    id="macos"
                                />
                                <label
                                    htmlFor="macos"
                                    className={styles['element__label']}
                                >
                                    macOS
                                </label>
                            </div>
                            <div className={styles['element__checkbox-block']}>
                                <input
                                    className={
                                        styles['element__input-checkbox']
                                    }
                                    type="checkbox"
                                    id="linux"
                                />
                                <label
                                    htmlFor="linux"
                                    className={styles['element__label']}
                                >
                                    Linux
                                </label>
                            </div>
                        </div>
                        <div className={styles['post-form__element']}>
                            <p className={styles['element__label']}>
                                Минимальные системные требования
                            </p>
                            <div className={styles['element__line-input']}>
                                <label
                                    htmlFor="cpu"
                                    className={styles['element__label']}
                                >
                                    Процессор (CPU)
                                </label>
                                <input
                                    onChange={handleInputChange(setTags)}
                                    className={styles['element__input']}
                                    type="text"
                                    id="cpu"
                                />
                            </div>
                            <div className={styles['element__line-input']}>
                                <label
                                    htmlFor="ram"
                                    className={styles['element__label']}
                                >
                                    Оперативная память (RAM)
                                </label>
                                <input
                                    onChange={handleInputChange(setTags)}
                                    className={styles['element__input']}
                                    type="text"
                                    id="ram"
                                />
                            </div>
                            <div className={styles['element__line-input']}>
                                <label
                                    htmlFor="cpu"
                                    className={styles['element__label']}
                                >
                                    Видеокарта (GPU)
                                </label>
                                <input
                                    onChange={handleInputChange(setTags)}
                                    className={styles['element__input']}
                                    type="text"
                                    id="cpu"
                                />
                            </div>
                            <div className={styles['element__line-input']}>
                                <label
                                    htmlFor="cpu"
                                    className={styles['element__label']}
                                >
                                    Свободное место на жестком диске
                                </label>
                                <input
                                    onChange={handleInputChange(setTags)}
                                    className={styles['element__input']}
                                    type="text"
                                    id="cpu"
                                />
                            </div>
                            <div className={styles['element__line-input']}>
                                <label
                                    htmlFor="cpu"
                                    className={styles['element__label']}
                                >
                                    Операционная система
                                </label>
                                <input
                                    onChange={handleInputChange(setTags)}
                                    className={styles['element__input']}
                                    type="text"
                                    id="cpu"
                                />
                            </div>
                            <div className={styles['element__line-input']}>
                                <label
                                    htmlFor="cpu"
                                    className={styles['element__label']}
                                >
                                    Дополнительные требования*
                                </label>
                                <input
                                    onChange={handleInputChange(setTags)}
                                    className={styles['element__input']}
                                    type="text"
                                    id="cpu"
                                />
                            </div>
                            <p
                                className={`${styles['element__desc']} ${styles['element__bottom-desc']}`}
                            >
                                *Если в списке не указаны прочие необходимые
                                характеристики для вашей игры, укажите их в
                                дополнительных требованиях
                            </p>
                        </div>
                        <div className={styles['post-form__element']}>
                            <p className={styles['element__label']}>
                                Контактная информация
                            </p>
                            <div className={styles['element__line-input']}>
                                <label
                                    htmlFor="developers"
                                    className={styles['element__label']}
                                >
                                    Разработчики
                                </label>
                                <input
                                    onChange={handleInputChange(setTags)}
                                    className={styles['element__input']}
                                    type="text"
                                    id="developers"
                                />
                            </div>
                            <div className={styles['element__line-input']}>
                                <label
                                    htmlFor="contacts"
                                    className={styles['element__label']}
                                >
                                    Контакты для связи
                                </label>
                                <input
                                    onChange={handleInputChange(setTags)}
                                    className={styles['element__input']}
                                    type="text"
                                    id="contacts"
                                />
                            </div>
                        </div>
                        <div className={styles['post-form__element']}>
                            <p className={styles['element__label']}>Жанры</p>
                            <div className={styles['element__checkbox-block']}>
                                <input
                                    className={
                                        styles['element__input-checkbox']
                                    }
                                    type="checkbox"
                                    id="windows"
                                />
                                <label
                                    htmlFor="windows"
                                    className={styles['element__label']}
                                >
                                    Шутеры
                                </label>
                            </div>
                            <div className={styles['element__checkbox-block']}>
                                <input
                                    className={
                                        styles['element__input-checkbox']
                                    }
                                    type="checkbox"
                                    id="macos"
                                />
                                <label
                                    htmlFor="macos"
                                    className={styles['element__label']}
                                >
                                    Карточные
                                </label>
                            </div>
                            <div className={styles['element__checkbox-block']}>
                                <input
                                    className={
                                        styles['element__input-checkbox']
                                    }
                                    type="checkbox"
                                    id="linux"
                                />
                                <label
                                    htmlFor="linux"
                                    className={styles['element__label']}
                                >
                                    Стратегии
                                </label>
                            </div>
                            <div className={styles['element__checkbox-block']}>
                                <input
                                    className={
                                        styles['element__input-checkbox']
                                    }
                                    type="checkbox"
                                    id="linux"
                                />
                                <label
                                    htmlFor="linux"
                                    className={styles['element__label']}
                                >
                                    Приключения
                                </label>
                            </div>
                            <div className={styles['element__checkbox-block']}>
                                <input
                                    className={
                                        styles['element__input-checkbox']
                                    }
                                    type="checkbox"
                                    id="linux"
                                />
                                <label
                                    htmlFor="linux"
                                    className={styles['element__label']}
                                >
                                    Ролевые
                                </label>
                            </div>
                            <div className={styles['element__checkbox-block']}>
                                <input
                                    className={
                                        styles['element__input-checkbox']
                                    }
                                    type="checkbox"
                                    id="linux"
                                />
                                <label
                                    htmlFor="linux"
                                    className={styles['element__label']}
                                >
                                    Пазлы
                                </label>
                            </div>
                            <div className={styles['element__checkbox-block']}>
                                <input
                                    className={
                                        styles['element__input-checkbox']
                                    }
                                    type="checkbox"
                                    id="linux"
                                />
                                <label
                                    htmlFor="linux"
                                    className={styles['element__label']}
                                >
                                    Спорт
                                </label>
                            </div>
                            <div className={styles['element__checkbox-block']}>
                                <input
                                    className={
                                        styles['element__input-checkbox']
                                    }
                                    type="checkbox"
                                    id="linux"
                                />
                                <label
                                    htmlFor="linux"
                                    className={styles['element__label']}
                                >
                                    Экшены
                                </label>
                            </div>
                            <div className={styles['element__line-input']}>
                                <label
                                    htmlFor="developers"
                                    className={styles['element__label']}
                                >
                                    Основной жанр
                                </label>
                                <input
                                    onChange={handleInputChange(setTags)}
                                    className={styles['element__input']}
                                    type="text"
                                    id="developers"
                                />
                            </div>
                        </div>
                        <div className={styles['post-form__element']}>
                            <p className={styles['element__label']}>
                                Количество игроков
                            </p>
                            <div className={styles['element__checkbox-block']}>
                                <input
                                    onChange={handleInputChange(setTags)}
                                    className={styles['element__input-radio']}
                                    type="radio"
                                    name="players-count"
                                    id="one-player"
                                />
                                <label
                                    htmlFor="one-player"
                                    className={styles['element__label']}
                                >
                                    Для одного игрока
                                </label>
                            </div>
                            <div className={styles['element__checkbox-block']}>
                                <input
                                    onChange={handleInputChange(setTags)}
                                    className={styles['element__input-radio']}
                                    type="radio"
                                    name="players-count"
                                    id="many-players"
                                />
                                <label
                                    htmlFor="many-players"
                                    className={styles['element__label']}
                                >
                                    Мультиплеер
                                </label>
                            </div>
                        </div>
                        <div className={styles['post-form__element']}>
                            <label
                                htmlFor="game-awards"
                                className={styles['element__label']}
                            >
                                Награды игры
                            </label>
                            <input
                                onChange={handleInputChange(setTitle)}
                                className={styles['element__input']}
                                type="text"
                                id="game-awards"
                            />
                        </div>
                        <button
                            onClick={() => handleProceed(2)}
                            className={styles['post-form__proceed']}
                        >
                            <div className={styles['btn__circle']}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="14"
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    className={styles['btn__arrow']}
                                >
                                    <path
                                        d="M14.3334 7.58336C14.6555 7.26118 14.6555 6.73882 14.3334 6.41664L9.0831 1.16637C8.76091 0.844186 8.23855 0.844186 7.91637 1.16637C7.59419 1.48855 7.59419 2.01091 7.91637 2.3331L12.5833 7L7.91637 11.6669C7.59419 11.9891 7.59419 12.5114 7.91637 12.8336C8.23855 13.1558 8.76091 13.1558 9.0831 12.8336L14.3334 7.58336ZM0.25 7.825H13.75V6.175H0.25V7.825Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            Продолжить
                        </button>
                    </div>
                )
            case 2:
                return (
                    <div className={styles['post-form__section']}>
                        <div className={styles['post-form__element']}>
                            <h2 className={styles['element__header']}>
                                Иконка
                            </h2>
                            <p className={styles['element__desc']}>
                                Иконка вашей игры, которая будет отображаться в
                                каталоге. Размер — 512 × 512 пикселей. Формат —
                                PNG.
                            </p>
                            <div
                                className={`${styles['drag-and-drop-area']} ${styles['drag-and-drop-area-min']}`}
                            >
                                <input type="file" />
                            </div>
                        </div>
                        <div className={styles['post-form__element']}>
                            <h2 className={styles['element__header']}>
                                Обложка
                            </h2>
                            <p className={styles['element__desc']}>
                                Обложка вашей игры, которая будет отображаться
                                на странице игры. Размер — 800 × 470 пикселей.
                                Формат — PNG.
                            </p>
                            <div
                                className={`${styles['drag-and-drop-area']} ${coverFileInputOnHover ? styles['drag-and-drop-area-hover'] : null}`}
                                onClick={() =>
                                    coverFileInputRef.current?.click()
                                }
                                onDragOver={(event) => {
                                    event.stopPropagation()
                                    event.preventDefault()
                                    setCoverFileInputOnHover(true)
                                }}
                                onDragLeave={() =>
                                    setCoverFileInputOnHover(false)
                                }
                                onDrop={(event) => {
                                    event.preventDefault()
                                    setCoverFileInputOnHover(false)
                                    if (coverFileInputRef.current) {
                                        coverFileInputRef.current!.files =
                                            event.dataTransfer.files
                                    }
                                    setCoverFileInputFilled(true)
                                }}
                            >
                                <div
                                    className={
                                        styles['drag-and-drop-area__text']
                                    }
                                >
                                    {coverFileInputFilled ? (
                                        <div
                                            className={
                                                styles[
                                                    'drag-and-drop-area__filename'
                                                ]
                                            }
                                        >
                                            {
                                                coverFileInputRef.current
                                                    ?.files?.[0]?.name
                                            }
                                            <p
                                                onClick={(event) => {
                                                    event.stopPropagation()
                                                    if (
                                                        coverFileInputRef.current
                                                    ) {
                                                        coverFileInputRef.current!.value =
                                                            ''
                                                    }
                                                    setCoverFileInputFilled(
                                                        false
                                                    )
                                                }}
                                            >
                                                &times;
                                            </p>
                                        </div>
                                    ) : (
                                        <p>
                                            <span>Выберите файл</span> или
                                            перетащите его сюда
                                        </p>
                                    )}
                                </div>
                                <input
                                    onChange={(event) => {
                                        if (coverFileInputRef.current) {
                                            coverFileInputRef.current!.files =
                                                event.target.files
                                        }
                                        setCoverFileInputFilled(true)
                                    }}
                                    type="file"
                                    ref={coverFileInputRef}
                                    hidden
                                />
                            </div>
                        </div>
                        <div className={styles['post-form__element']}>
                            <h2 className={styles['element__header']}>
                                Скриншоты
                            </h2>
                            <p className={styles['element__desc']}>
                                Иконка вашей игры, которая будет отображаться в
                                каталоге. Размер — 512 × 512 пикселей. Формат —
                                PNG.
                            </p>
                            <div className={styles['drag-and-drop-area']}>
                                <input type="file" />
                            </div>
                        </div>
                        <div className={styles['post-form__element']}>
                            <h2 className={styles['element__header']}>
                                Трейлер
                            </h2>
                            <p className={styles['element__desc']}>
                                Представьте элементы игрового процесса, выделив
                                преимущества и уникальные черты игры. Размещение
                                соответствующих промо-материалов в каталоге
                                направлено на привлечение дополнительного
                                внимания пользователей. <br />
                                Соотношение сторон — 16 : 9. Формат — MP4.
                            </p>
                            <div className={styles['drag-and-drop-area']}>
                                <input type="file" />
                            </div>
                        </div>
                        <button
                            onClick={() => handleProceed(3)}
                            className={styles['post-form__proceed']}
                        >
                            <div className={styles['btn__circle']}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="14"
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    className={styles['btn__arrow']}
                                >
                                    <path
                                        d="M14.3334 7.58336C14.6555 7.26118 14.6555 6.73882 14.3334 6.41664L9.0831 1.16637C8.76091 0.844186 8.23855 0.844186 7.91637 1.16637C7.59419 1.48855 7.59419 2.01091 7.91637 2.3331L12.5833 7L7.91637 11.6669C7.59419 11.9891 7.59419 12.5114 7.91637 12.8336C8.23855 13.1558 8.76091 13.1558 9.0831 12.8336L14.3334 7.58336ZM0.25 7.825H13.75V6.175H0.25V7.825Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            Продолжить
                        </button>
                    </div>
                )
            case 3:
                return (
                    <div className={styles['post-form__section']}>
                        Контент Раздела 3
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <main className={styles['post-form__wrapper']}>
            <div className={styles['post-form__container']}>
                <Sidebar
                    sections={sections}
                    activeSectionId={activeSectionId}
                    setActiveSectionId={setActiveSectionId}
                />
                {renderSection(activeSectionId)}
            </div>
        </main>
    )
}

export default PostForm
