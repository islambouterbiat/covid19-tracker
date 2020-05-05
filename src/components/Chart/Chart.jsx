import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar, defaults } from "react-chartjs-2";
import BeatLoader from "react-spinners/BeatLoader";
import "./chart.css";

function Chart({ data: { TotalCases, TotalDeaths, TotalRecovered }, country }) {
  const [dailyData, setDailyData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
      setLoading(true);
    };
    fetchApi();
  }, []);

  defaults.global.animation.duration = 3000;
  const LineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "infected",
            borderColor: "#3578e5",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "#fa3e3e",
            backgroundColor: "rgba(250,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const BarChart = TotalCases ? (
    <Bar
      data={{
        labels: ["Infected", "Deaths", "Recovered"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#3578e5", "#fa3e3e", "#42b72a"],
            data: [
              parseFloat(TotalCases.replace(/,/g, "")),
              parseFloat(TotalDeaths.replace(/,/g, "")),
              parseFloat(TotalRecovered.replace(/,/g, "")),
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  if (!loading || !TotalCases)
    return (
      <div className="loading-chart d-flex justify-content-center">
        <BeatLoader />
        <p className="loading-chart-txt">Loading chart ..</p>
      </div>
    );
  return <div className="chart-box">{country ? BarChart : LineChart}</div>;
}

export default Chart;
