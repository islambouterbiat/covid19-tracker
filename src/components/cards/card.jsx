import React from "react";
import CountUp from "react-countup";

const Card = ({ cardType, name, total, newStats, msg }) => {
  // console.log(parseFloat(newStats.replace("+", "").replace(/,/g, "")));
  return (
    <div className="card-box col-sm-3">
      <div className={cardType}>
        <div className="card-body">
          <p className="card-text">{name}</p>
          {total ? (
            <React.Fragment>
              <p className="card-text card-stats">
                {total ? "Total : " : ""}
                <CountUp
                  start={0}
                  end={parseFloat(total.replace(/,/g, ""))}
                  duration={2.5}
                  separator=","
                />
              </p>
              <p className="card-text card-stats">
                {newStats ? "Today : +" : msg}
                <CountUp
                  start={0}
                  end={parseFloat(newStats.replace("+", "").replace(/,/g, ""))}
                  duration={2.5}
                  separator=","
                />
              </p>
            </React.Fragment>
          ) : (
            <div className="loading-spinner">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
