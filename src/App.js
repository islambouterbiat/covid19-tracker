import React, { Component } from "react";
import Cards from "./components/cards/cards";
import { fetchData } from "./api/index";
import "./App.css";

class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const data = await fetchData();
    const fetchedData = data.reports[0];
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <h1 className="app-header">Covid-19 Tracker Made By Islam</h1>
        <div className="app-container">
          <Cards data={data} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
