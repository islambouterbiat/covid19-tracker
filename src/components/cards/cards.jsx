import React from "react";
import "./cards.css";
import Card from "./card";

const Cards = ({ data: { cases, deaths, recovered } }) => {
  if (!cases) {
    return (
      <div className="loading-spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="row cards-container">
      <Card cardType="card confirmed" name="Cases" statistics={cases} />
      <Card cardType="card deaths" name="Deaths" statistics={deaths} />
      <Card cardType="card recovered" name="Recovered" statistics={recovered} />
    </div>
  );
};

export default Cards;
