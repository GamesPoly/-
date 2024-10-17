import React from "react";
import "../Reviews.scss"
import star from "@assets/star.svg";

export type ReviewProps = {
  id: number;
  author: string;
  text: string;
  stars: number;
  link: any;
};

const Review: React.FC<ReviewProps> = ({ id, author, text, stars, link }) => {
  return (
    <div className="review-card">
      <div className="review-card__header">
        <div className="review-card__avatar">
          <img src={link} alt="" />
          <span className="review-card__author">{author}</span>
        </div>
        <div className="review-card__stars">
          <img src={star} alt="" />
          <span className="review-card__count">{stars}</span>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Review;
