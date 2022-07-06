import React, { useState } from "react";
import "./card.css";
import CardTitle from "../cardTitle/cardTitle";
import CardImage from "../cardImage/cardImage";
import CardInfo from "../cardInfo/cardInfo";

const Card = ({ title, image, info, onClick }) => {
const [count,setCount]=useState(0)

  return (
    <div className="card">
      <div className="card-body">
        <CardInfo info={info} />
        <CardImage url={image} />
        <CardTitle title={title} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <button className="card-button"
            onClick={(e) => {
              onClick(e);
              setCount(count+1)
            }}
          >
            Add
          </button>
        </div>
        <br />
        <p style={{ textAlign: "center" }}>You bought: <span style={{color:"red",fontWeight:"bold"}}>{count}</span></p>
      </div>
    </div>
  );
};

export default Card;
