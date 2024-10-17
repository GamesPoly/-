import React, { useState } from "react";
import "./GamesItem.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

type GamesItemProps = Partial<{
  name: string;
  desc: string;
  imageUrl: string;
}>;
function GamesItem({ name, desc, imageUrl }: GamesItemProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const openCard = (card: GamesItemProps) => {
  //   //когда будет бэк и какая-то функция для получения подробной инфы об игре, чтобы 
  //   //можно было ее отобразить на вьюшке игры
  //   dispatch(getCard(card)).then((res: any) => {
  //     navigate(`/games/${res.id}`);
  //   });
  // };

  return (
    <li className="list__card">
      <div
        // onClick={() => openCard({ name: name, desc: desc, imageUrl: imageUrl })}
        className="card__content"
      >
        {!isLoaded && <Skeleton className="card__cover" />}
        <img
          src={imageUrl}
          alt={name}
          className="card__cover"
          onLoad={() => setIsLoaded(true)}
          style={{ display: isLoaded ? "block" : "none" }}
        />

        <div className="card__text">
          <h4 className="card__title">{name || <Skeleton />}</h4>
          <p className="card__desc">{desc || <Skeleton count={10} />}</p>
        </div>
      </div>
    </li>
  );
}

export default GamesItem;
