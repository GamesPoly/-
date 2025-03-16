import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.scss'

const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <h1>404 - Страница не найдена</h1>
            <p>К сожалению, страница, которую вы ищете, не существует.</p>
            <Link className={'not-found__backlink'} to="/">
                Вернуться на главную
            </Link>
        </div>
    )
}

export default NotFound
