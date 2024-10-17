import React from "react";
import '../../Game.scss'
import pict1 from '@assets/test-game-picture1.png'
import pict2 from '@assets/test-game-picture2.png'
import "../GameDescription/GameDescription.scss"

const GameDescription: React.FC = () => {
  return (
    <div className="description">
      <h2 className="description__title">Об игре</h2>
      <div className="description__grid">
        <div className="description__column">
          <div className="description__text">
            Не следует, однако, забывать, что повышение уровня гражданского
            сознания предполагает независимые способы реализации модели
            развития. 
            <br></br>
            Есть над чем задуматься: базовые сценарии поведения
            пользователей набирают популярность среди определенных 
            слоев
            населения, а значит, должны быть превращены 
            в посмешище, хотя само
            их существование приносит несомненную пользу обществу. И нет
            сомнений, что диаграммы связей, вне
             зависимости от их уровня, должны
            быть подвергнуты целой серии независимых исследований.
          </div>
          <img className="description__pic1" src={pict1} alt="" />
        </div>
        <div className="description__column">
          <img className="description__pic2" src={pict2} alt="" />
          <div className="description__text description__text--second">Есть над чем задуматься: базовые сценарии поведения пользователей набирают популярность
             среди определенных слоев
              населения, а значит, должны быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. И нет сомнений, что диаграммы связей, вне зависимости от их уровня, должны быть подвергнуты целой серии независимых исследований.</div>
          <div className="description__text description__text--second">
            <span className="description__title description__title--seconary">Рекомендуемые системные 
          требования</span>
          <ul className="description__list">
            <li>ОС: Windows 7, 8, 8.1, 10, 11</li>
            <li>Процессор: 2.4 GHz</li>
            <li>Память: 2 GB ОЗУ</li>
            <li>Место на диске: 2 GB</li>
            <li>Видеокарта: 512 MB</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDescription;
