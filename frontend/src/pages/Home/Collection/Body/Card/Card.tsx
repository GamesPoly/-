import React from 'react'
import './Card.scss'
import cover from '../../../../../shared/assets/cover-game2.png'
import bgCover from '../../../../../shared/assets/cover-game19.png'
import game from '../../../../../shared/assets/game-pic.png'
import miniCover from '../../../../../shared/assets/cover-game4.png'
import arrows from '../../../../../shared/assets/arrows.svg'
import IconBlock from './CardBlocks/IconBlock'
import icon1 from '../../../../../shared/assets/test-icon1.png'
import icon2 from '../../../../../shared/assets/test-icon2.png'
import icon3 from '../../../../../shared/assets/test-icon3.png'
import icon4 from '../../../../../shared/assets/test-icon4.png'

const CardCollection = ({ version }: any) => {
    return (
        <div>
            {version === 'icons' && (
                <div className="collection__card-game card-game card-game--icons">
                    <IconBlock
                        srcIcon={icon1}
                        text={'Играй в уникальные игры первым'}
                    />
                    <IconBlock
                        srcIcon={icon2}
                        text={'Находи друзей и общайся с единомышленниками'}
                    />
                    <IconBlock
                        srcIcon={icon3}
                        text={
                            'Загружай свои игры, делая свой вклад в мир гейминга'
                        }
                    />
                    <IconBlock
                        srcIcon={icon4}
                        text={
                            'Найди талантливых соавторов или команду для своего проекта'
                        }
                    />
                </div>
            )}
            {version === 'standart' && (
                <div className="collection__card-game card-game">
                    {/* <img src={cover} alt="Cover for game" className="card-game__cover" /> */}
                    {/*<svg className="card-game__cover" xmlns="http://www.w3.org/2000/svg" width="420" height="220" viewBox="0 0 420 220" fill="none">*/}
                    {/*    <mask id="imageMask">*/}
                    {/*        <path fill="#fff" d="M50 0C22.3858 0 0 22.3858 0 50V170C0 197.614 22.3858 220 50 220H250C277.614 220 300 197.614 300 170C300 197.614 322.386 220 350 220H370C397.614 220 420 197.614 420 170V50C420 22.3858 397.614 0 370 0H350C322.386 0 300 22.3858 300 50C300 22.3858 277.614 0 250 0H50Z" />*/}
                    {/*    </mask>*/}
                    {/*    <image*/}
                    {/*        mask="url(#imageMask)"*/}
                    {/*        width="100%"*/}
                    {/*        xlinkHref={cover}*/}
                    {/*    />*/}
                    {/*</svg>*/}
                    <div className="card-game__info">
                        <img src={game}></img>
                        {/*<h3 className="card-game__title">В объективе!</h3>*/}
                        <p className="card-game__desc">
                            Мы - команда студентов Московского Политеха, и мы
                            рады приветствовать вас на нашем игровом портале
                            PolyGames, где вы можете открыть для себя
                            удивительные проекты, которые были созданы нашими
                            студентами.
                        </p>
                    </div>
                    {/*<a href="/" className="card-game__link">*/}
                    {/*    <p className="card-game__more">Подробнее</p>*/}
                    {/*    <svg className="card-game__arrow" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">*/}
                    {/*        <circle cx="25" cy="25" r="25" fill="#FF5731"/>*/}
                    {/*        <path d="M32.4642 18.6363C32.4642 18.0288 31.9717 17.5363 31.3642 17.5363L21.4642 17.5363C20.8566 17.5363 20.3642 18.0288 20.3642 18.6363C20.3642 19.2438 20.8566 19.7363 21.4642 19.7363L30.2642 19.7363L30.2642 28.5363C30.2642 29.1438 30.7566 29.6363 31.3642 29.6363C31.9717 29.6363 32.4642 29.1438 32.4642 28.5363L32.4642 18.6363ZM19.414 32.1421L32.142 19.4142L30.5863 17.8585L17.8584 30.5864L19.414 32.1421Z" fill="white"/>*/}
                    {/*    </svg>*/}
                    {/*</a>*/}
                </div>
            )}
            {version === 'solid' && (
                <div
                    className="collection__card-game card-game card-game--solid"
                    style={{ backgroundImage: `url(${bgCover})` }}
                >
                    <div className="card-game__info card-game__info__simple card-game__info--solid">
                        <h3 className="card-game__title">Разработчикам</h3>
                        <p className="card-game__desc">
                            PolyGames - ваша платформа для выражения творчества.
                            Не теряйте шанс поделиться своими игровыми мирами с
                            нашим сообществом - загружайте свои игры.
                        </p>
                    </div>
                    {/*<a href="/" className="card-game__author">*/}
                    {/*    <img src={avatar} alt="Avatar developer" className="card-game__ava" />*/}
                    {/*    <div className="card-game__user">*/}
                    {/*        <p className="card-game__role">Разработчик</p>*/}
                    {/*        <h4 className="card-game__name">IAvocadoI</h4>*/}
                    {/*    </div>*/}
                    {/*</a>*/}
                    {/*<div className="card-game__info card-game__info--solid">*/}
                    {/*<h3 className="card-game__title">Latest Days</h3>*/}
                    {/*<p className="card-game__desc">Это лучший день в твоей жизни. Ни забот, ни печалей. Просто насладись днем у себя дома.</p>*/}
                    {/*</div>*/}
                    {/*<a href="/" className="card-game__link card-game__link--solid">*/}
                    {/*    <p className="card-game__more">Подробнее</p>*/}
                    {/*    <svg className="card-game__arrow card-game__arrow--solid" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">*/}
                    {/*        <circle cx="25" cy="25" r="25" fill="#FF5731"/>*/}
                    {/*        <path d="M32.4642 18.6363C32.4642 18.0288 31.9717 17.5363 31.3642 17.5363L21.4642 17.5363C20.8566 17.5363 20.3642 18.0288 20.3642 18.6363C20.3642 19.2438 20.8566 19.7363 21.4642 19.7363L30.2642 19.7363L30.2642 28.5363C30.2642 29.1438 30.7566 29.6363 31.3642 29.6363C31.9717 29.6363 32.4642 29.1438 32.4642 28.5363L32.4642 18.6363ZM19.414 32.1421L32.142 19.4142L30.5863 17.8585L17.8584 30.5864L19.414 32.1421Z" fill="white"/>*/}
                    {/*    </svg>*/}
                    {/*</a>*/}
                </div>
            )}
            {version === 'mini' && (
                <div className="collection__card-game card-game card-game--mini">
                    <div className="card-game__info card-game__info--mini">
                        <div className="card-game__head">
                            <div className="card-game__headings">
                                <h3 className="card-game__title">
                                    Simulation 23/3
                                </h3>
                                <h5 className="card-game__rating">
                                    2 место MospolyJam 2023
                                </h5>
                            </div>
                            <img
                                src={miniCover}
                                alt="Cover for game"
                                className="card-game__squircle"
                            />
                        </div>
                        <p className="card-game__desc">
                            Обычный платформер-головоломка, где игроку
                            приходится проходить уровни на логику и смекалку.
                        </p>
                    </div>
                    <a href="/src/pages" className="card-game__link">
                        <p className="card-game__more">Подробнее</p>
                        <svg
                            className="card-game__arrow card-game__arrow"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                        >
                            <circle cx="25" cy="25" r="25" fill="#FF5731" />
                            <path
                                d="M32.4642 18.6363C32.4642 18.0288 31.9717 17.5363 31.3642 17.5363L21.4642 17.5363C20.8566 17.5363 20.3642 18.0288 20.3642 18.6363C20.3642 19.2438 20.8566 19.7363 21.4642 19.7363L30.2642 19.7363L30.2642 28.5363C30.2642 29.1438 30.7566 29.6363 31.3642 29.6363C31.9717 29.6363 32.4642 29.1438 32.4642 28.5363L32.4642 18.6363ZM19.414 32.1421L32.142 19.4142L30.5863 17.8585L17.8584 30.5864L19.414 32.1421Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                </div>
            )}
            {version === 'catalog' && (
                <div className="collection__card-game card-game card-game--catalog">
                    <div className="card-game__actions">
                        <a
                            href="pages/Home/Collection/Body/Card/Card#"
                            className="card-game__link card-game__link--catalog"
                        >
                            <p className="visually-hidden">Перейти в каталог</p>
                            <svg
                                className="card-game__gamepad"
                                xmlns="http://www.w3.org/2000/svg"
                                width="92"
                                height="54"
                                viewBox="0 0 92 54"
                                fill="none"
                            >
                                <rect
                                    width="92"
                                    height="54"
                                    rx="27"
                                    fill="#FF5731"
                                />
                                <path
                                    d="M35.1666 24.8331V22.6664C35.1666 22.0918 34.9383 21.5407 34.532 21.1344C34.1257 20.7281 33.5746 20.4998 33 20.4998C32.4254 20.4998 31.8743 20.7281 31.4679 21.1344C31.0616 21.5407 30.8334 22.0918 30.8334 22.6664V24.8331H28.6667C28.0921 24.8331 27.541 25.0613 27.1347 25.4676C26.7284 25.874 26.5001 26.4251 26.5001 26.9997C26.5001 27.5743 26.7284 28.1254 27.1347 28.5317C27.541 28.938 28.0921 29.1663 28.6667 29.1663H30.8334V31.3329C30.8334 31.9075 31.0616 32.4586 31.4679 32.8649C31.8743 33.2712 32.4254 33.4995 33 33.4995C33.5746 33.4995 34.1257 33.2712 34.532 32.8649C34.9383 32.4586 35.1666 31.9075 35.1666 31.3329V29.1663H37.3332C37.9078 29.1663 38.4589 28.938 38.8652 28.5317C39.2715 28.1254 39.4998 27.5743 39.4998 26.9997C39.4998 26.4251 39.2715 25.874 38.8652 25.4676C38.4589 25.0613 37.9078 24.8331 37.3332 24.8331H35.1666ZM33 14H58.9993C61.1678 14 63.3018 14.5423 65.207 15.5778C67.1123 16.6132 68.7283 18.1088 69.9078 19.9284C71.0873 21.7479 71.793 23.8337 71.9605 25.9956C72.1279 28.1576 71.7519 30.3271 70.8667 32.3066C69.9815 34.2862 68.6151 36.0128 66.892 37.3293C65.169 38.6458 63.144 39.5104 61.0014 39.8443C58.8588 40.1782 56.6667 39.9708 54.6248 39.2411C52.5828 38.5113 50.7559 37.2824 49.3102 35.6661H42.6891C41.2434 37.2824 39.4165 38.5113 37.3745 39.2411C35.3325 39.9708 33.1405 40.1782 30.9979 39.8443C28.8553 39.5104 26.8303 38.6458 25.1072 37.3293C23.3842 36.0128 22.0178 34.2862 21.1326 32.3066C20.2474 30.3271 19.8714 28.1576 20.0388 25.9956C20.2063 23.8337 20.912 21.7479 22.0915 19.9284C23.271 18.1088 24.887 16.6132 26.7923 15.5778C28.6975 14.5423 30.8315 14 33 14ZM58.9993 24.8331C59.5739 24.8331 60.125 24.6048 60.5313 24.1985C60.9377 23.7922 61.1659 23.2411 61.1659 22.6664C61.1659 22.0918 60.9377 21.5407 60.5313 21.1344C60.125 20.7281 59.5739 20.4998 58.9993 20.4998C58.4247 20.4998 57.8736 20.7281 57.4673 21.1344C57.061 21.5407 56.8327 22.0918 56.8327 22.6664C56.8327 23.2411 57.061 23.7922 57.4673 24.1985C57.8736 24.6048 58.4247 24.8331 58.9993 24.8331ZM54.6661 29.1663C55.2407 29.1663 55.7918 28.938 56.1981 28.5317C56.6044 28.1254 56.8327 27.5743 56.8327 26.9997C56.8327 26.4251 56.6044 25.874 56.1981 25.4676C55.7918 25.0613 55.2407 24.8331 54.6661 24.8331C54.0915 24.8331 53.5404 25.0613 53.1341 25.4676C52.7278 25.874 52.4995 26.4251 52.4995 26.9997C52.4995 27.5743 52.7278 28.1254 53.1341 28.5317C53.5404 28.938 54.0915 29.1663 54.6661 29.1663ZM63.3325 29.1663C63.9072 29.1663 64.4583 28.938 64.8646 28.5317C65.2709 28.1254 65.4992 27.5743 65.4992 26.9997C65.4992 26.4251 65.2709 25.874 64.8646 25.4676C64.4583 25.0613 63.9072 24.8331 63.3325 24.8331C62.7579 24.8331 62.2068 25.0613 61.8005 25.4676C61.3942 25.874 61.1659 26.4251 61.1659 26.9997C61.1659 27.5743 61.3942 28.1254 61.8005 28.5317C62.2068 28.938 62.7579 29.1663 63.3325 29.1663ZM58.9993 33.4995C59.5739 33.4995 60.125 33.2712 60.5313 32.8649C60.9377 32.4586 61.1659 31.9075 61.1659 31.3329C61.1659 30.7583 60.9377 30.2072 60.5313 29.8009C60.125 29.3946 59.5739 29.1663 58.9993 29.1663C58.4247 29.1663 57.8736 29.3946 57.4673 29.8009C57.061 30.2072 56.8327 30.7583 56.8327 31.3329C56.8327 31.9075 57.061 32.4586 57.4673 32.8649C57.8736 33.2712 58.4247 33.4995 58.9993 33.4995Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                        <a
                            href="pages/Home/Collection/Body/Card/Card#"
                            className="card-game__link card-game__link--catalog"
                        >
                            <img
                                src={arrows}
                                alt="Go to catalog"
                                className="card-game__arrows"
                            />
                        </a>
                    </div>
                    <div className="card-game__info card-game__info--catalog">
                        <p className="card-game__desc">
                            Перейдите в каталог и посмотрите на работы других
                            разработчиков
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CardCollection
