import React, { useEffect } from "react";
import "./ReviewItems.css";

const ReviewItems = (props) => {
  let { review } = props;
  useEffect(() => {
    console.log(review);
  }, [review]);
  return (
    <div className="review-container">
      <h1>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </h1>
      <h2>"{review.comment.slice(0, 150)}"</h2>
      <h4>By: {review.name.toUpperCase()}</h4>
      <h3>Rating: {review.rating} star</h3>
    </div>
  );
};

export default ReviewItems;
