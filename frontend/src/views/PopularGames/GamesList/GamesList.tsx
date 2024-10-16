import React from 'react';
import './GamesList.scss'
import GamesItem from './GamesItem/GamesItem';

type Popular = {
    name: string,
    desc: string,
    cover: any
}

type GamesListProps = {
    title:string,
    games: Popular[],
    size: 'small' | 'big'
}

function GamesList({title, games, size}: GamesListProps) {

    const gamesListBody = `games-list__body games-list__body--${size}`;

    return ( 
        <section className="games-list">
            <h3 className="games-list__header">{title}</h3>
            <ul className={gamesListBody}>
                {games.map((game) => <GamesItem name={game.name} desc={game.desc} cover={game.cover} key={game.name}/>)}
            </ul>
            
        </section>
     );
}

export default GamesList;