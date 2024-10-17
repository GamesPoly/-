import React from "react";
import "../GameCard/GameCard.scss";
import GameSlider from "../GamesSlider/GamesSlider";
import Preview from "../Preview/Preview";

type GameCardProps = {
  id: string;
};

const GameCard: React.FC<GameCardProps> = ({ id }) => {
  return (
    <div className="card">
      <h1 className="card__header">Astrea</h1>
      <div className="card__block">
        <GameSlider />
        <Preview />
      </div>
    </div>
  );
};

export default GameCard;
