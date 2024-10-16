import React from 'react';
import './PopularGames.scss'
import GameBanner from './GameBanner/GameBanner';
import cover1 from '@assets/cover-game4.png'
import GamesList from './GamesList/GamesList';
import GenresList from './GenresList/GenresList';

const PopularOfMonth = [{
    title: 'Популярное за месяц',
    games: [
        {
            name: 'Simulation',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        }
    ]
}, 
]

const PopularNew = [{
    title: 'Популярные новинки',
    games: [
        {
            name: 'Simulation',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
        {
            name: 'Simulation',
            desc: 'Платформер-головоломка с уровнями на логику и смека...',
            cover: cover1
        },
    ]
}, 
]


const PopularGenres = [{
    title: 'Популярные жанры',
    genres: [
        {
            name: 'Simulation',
            cover: cover1
        },
        {
            name: 'Simulation',
            cover: cover1
        },
        {
            name: 'Simulation',
            cover: cover1
        },
        {
            name: 'Simulation',
            cover: cover1
        },
        {
            name: 'Simulation',
            cover: cover1
        },
        {
            name: 'Simulation',
            cover: cover1
        },
    ]
}, 
]




function PopularGames() {

    
    return (  
        <main className="popular-games">
            <div className="popular-games__wrapper">
                <GameBanner />
                {PopularOfMonth.map((list) => <GamesList title={list.title} games={list.games} size={'small'} key={list.title}/>)}
                {PopularGenres.map((list) => <GenresList title={list.title} genres={list.genres} key={list.title}/>)}
                {PopularNew.map((list) => <GamesList title={list.title} games={list.games} size={'big'} key={list.title}/>)}
            </div>
        </main>
    );
}

export default PopularGames;