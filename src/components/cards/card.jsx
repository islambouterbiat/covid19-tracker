import React from "react";
import CountUp from "react-countup";

const Card = ({ cardType, name, statistics }) => {
  return (
    <div className="col-sm-3">
      <div className={cardType}>
        <div className="card-body">
          <p className="card-text">{name}</p>
          <p className="card-text">
            <CountUp start={0} end={statistics} duration={2.5} separator="," />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
