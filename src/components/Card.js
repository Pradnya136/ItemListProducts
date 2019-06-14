import React from "react";
import "./Card.css";

function Card({
  name,
  id,
  email,
  Increment,
  Decrement,
  StatusOfCount,
  count,
  valuebtn
}) {
  return (
    <div className="bg-lightest-blue ma3 tc shadow-5   pa3 dib ">
      <div className="bg-lightest-blue ma2 shadow-5   pa3 dib">
        <img src={`https://picsum.photos/id/${id}/200/200`} alt="something" />
        <div className="ma2">
          <p className="alert alert-info">{name}</p>
          <p className="alert alert-primary">{email}</p>
          <span>Quantity : {valuebtn}</span>

          <button onClick={Increment} className="btn btn-outline-secondary">
            +
          </button>
          <button onClick={Decrement} className="btn btn-outline-secondary">
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
