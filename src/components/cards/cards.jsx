import React from "react";
import "./cards.css";
import Card from "./card";

const Cards = ({
  data: { TotalCases, TotalDeaths, TotalRecovered, NewCases, NewDeaths },
}) => {
  return (
    <div className="row cards-container">
      <Card
        cardType="card confirmed"
        name="Cases"
        total={TotalCases}
        newStats={NewCases}
        msg="Today : Not yet"
      />
      <Card
        cardType="card deaths"
        name="Deaths"
        total={TotalDeaths}
        newStats={NewDeaths}
        msg="Today : Not yet"
      />
      <Card
        cardType="card recovered"
        name="Recovered"
        total={TotalRecovered}
        newStats=""
      />
    </div>
  );
};

export default Cards;
