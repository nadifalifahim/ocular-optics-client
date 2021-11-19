import React, { useEffect, useState } from "react";

import useLoader from "../../../Hooks/useLoader";
import ReviewItems from "./ReviewItems";

const Reviews = () => {
  const [reviewData, setReviewData] = useState([]);
  const [runLoader, setRunLoader] = useState(true);
  const loader = useLoader();

  useEffect(() => {
    fetch("https://ocular-optics.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviewData(data);
        setRunLoader(false);
      });
  }, []);

  return (
    <div>
      <div id="packages" className="home-services-container">
        <div className="home-services-content">
          <h2 className="section-title">Testimonial</h2>
          <p className="section-content">Hear what our customers have to say</p>
        </div>
        {/* Loader while loading */}
        {runLoader ? (
          loader
        ) : (
          <div>
            <div className="home-service-container">
              {reviewData.map((review) => (
                <ReviewItems key={review._id} review={review}></ReviewItems>
              ))}
            </div>
            <div className="home-services-content"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
