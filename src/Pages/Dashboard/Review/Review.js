import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const history = useHistory();

  const nameRef = useRef();
  const emailRef = useRef();
  const ratingRef = useRef();
  const commentRef = useRef();

  const handleAddReview = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const rating = ratingRef.current.value;
    const comment = commentRef.current.value;

    const reviewDetails = {
      name,
      email,
      rating,
      comment,
    };

    fetch("https://ocular-optics.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          alert("Review added successfully!");
          e.target.reset();
          history.push("/dashboard");
        }
      });
    e.preventDefault();
  };

  const [userName, setUserName] = useState(user.displayName);
  const [userEmail, setUserEmail] = useState(user.email);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  return (
    <div className="place-order-container">
      <div className="billing-details">
        <div className="billing-details-content">
          <h1 className="section-title">Add A Review</h1>
          <form onSubmit={handleAddReview}>
            <label>
              Full Name
              <input
                type="text"
                required
                value={userName}
                onChange={handleNameChange}
                ref={nameRef}
              ></input>
            </label>
            <label>
              Email Address
              <input
                type="email"
                required
                value={userEmail}
                onChange={handleEmailChange}
                ref={emailRef}
              ></input>
            </label>
            <label>
              Rating (1-5)
              <input type="number" required ref={ratingRef}></input>
            </label>
            <label>
              Comment
              <textarea type="text" ref={commentRef}></textarea>
            </label>

            <button type="submit" className="primary-button">
              Add Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
