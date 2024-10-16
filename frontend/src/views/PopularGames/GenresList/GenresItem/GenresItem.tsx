import React from 'react';
import './GenresItem.scss'

type GenresItemsProps = {
    name: string,
    cover: any
}

function GenresItem({name,cover}: GenresItemsProps) {
    return (  
        <li className="genres-list__card">
            <img src={cover} alt="Изображение игры" className='genres-list__card-cover' />
            <div className="genres-list__card-text">
                <h4 className="genres-list__card-title">{name}</h4>
            </div>
        </li>
    );
}

export default GenresItem;