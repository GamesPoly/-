import React from 'react'
import styles from './Head.module.scss'

const CollectionHead = () => {
    return (
        <div className={styles.collection__head}>
            {/*<button className="collection__currently currently">*/}
            {/*    <p className="currently__text">Популярное</p>*/}
            {/*    <svg className='currently__arrow' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">*/}
            {/*        <path d="M10.9393 23.0607C11.5251 23.6464 12.4749 23.6464 13.0607 23.0607L22.6066 13.5147C23.1924 12.9289 23.1924 11.9792 22.6066 11.3934C22.0208 10.8076 21.0711 10.8076 20.4853 11.3934L12 19.8787L3.51472 11.3934C2.92893 10.8076 1.97919 10.8076 1.3934 11.3934C0.807611 11.9792 0.807611 12.9289 1.3934 13.5147L10.9393 23.0607ZM10.5 0L10.5 22H13.5L13.5 0L10.5 0Z" fill="white"/>*/}
            {/*    </svg>*/}
            {/*</button>*/}
            {/*<div className="collection__headline">*/}
            <h2 className={styles.collection__name}>О нас</h2>
            {/*<div className="collection__action">*/}
            {/*    <button className="collection__dot collection__dot--active">*/}
            {/*        <p className="visually-hidden">Переключатель 1</p> */}
            {/*    </button>*/}
            {/*    <button className="collection__dot">*/}
            {/*        <p className="visually-hidden">Переключатель 2</p> */}
            {/*    </button>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<button className="collection__next-info next-info">*/}
            {/*    <svg className='next-info__arrow' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">*/}
            {/*        <path d="M23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807611 11.9792 0.807611 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM0 13.5H22V10.5H0V13.5Z" fill="white"/>*/}
            {/*    </svg>*/}
            {/*    <p className="next-info__text">О нас</p>*/}
            {/*</button>*/}
        </div>
    )
}

export default CollectionHead
