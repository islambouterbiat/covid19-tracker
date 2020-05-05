import React, { Component } from "react";
import { fetchData, fetchFlags } from "./api/index";
import Cards from "./components/cards/cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/countryPicker/countryPicker";
import CovidImg from "./images/image.png";
import "./App.css";

class App extends Component {
  state = {
    data: {},
    country: "",
    flag: "",
  };
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
    const fetchedData = data[0];
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    this.setState({ data: {} });
    const data = await fetchData(country);
    const flag = await fetchFlags(country);
    const fetchedData = data[0];
    const fetchedFlag = flag;
    this.setState({ data: fetchedData, country, flag: fetchedFlag });
  };

  render() {
    const { data, country, flag } = this.state;
    return (
      <React.Fragment>
        <div className="app-container">
          <div className="appHeaderBox">
            <img className="covidImg" src={CovidImg} />
            <h1 className="app-header">
              Covid-19 Tracker Made By Islam Bouterbiat
            </h1>
          </div>
          <div>
            <div className="d-flex justify-content-center align-items-center mb-3">
              {country === "USA" ? (
                <img
                  className="countryFlag"
                  src="https://www.worldometers.info/img/flags/small/tn_us-flag.gif"
                ></img>
              ) : country && country != "World" ? (
                <img className="countryFlag" src={flag ? flag : ""}></img>
              ) : (
                ""
              )}
              <h2 className="world-header ml-2">
                {country ? country : "World"}
              </h2>
            </div>
            <Cards data={data} />
          </div>
          <div>
            {data ? (
              <CountryPicker onCountryChange={this.handleCountryChange} />
            ) : (
              "islam"
            )}
          </div>
          <div>
            <Chart data={data} country={country} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
