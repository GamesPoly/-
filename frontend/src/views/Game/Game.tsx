import React from "react";
import { useParams } from "react-router-dom";
import GameCard from "./components/GameCard/GameCard";
import GameDescription from "./components/GameDescription/GameDescription";
import ReviewsList from "./components/ReviewsList/ReviewsList";

type GameParams = {
  id: string;
};

const Game: React.FC = () => {
  const { id } = useParams<GameParams>();

  return <main className="game">
    <div className="game__wrapper">{
    id ? <>
{/* пока просто по приколу id в пропсах, так как все на заглушках */}
  <GameCard id={id} />
  <GameDescription/>
  <ReviewsList/>
  </> : <p>No game selected</p>}
  </div>
  </main>;
};

export default Game;
