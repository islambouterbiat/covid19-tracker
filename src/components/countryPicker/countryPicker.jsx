import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";
import Select from "react-select";
import "./countryPicker.css";

function CountryPicker({ onCountryChange }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getCountries = async () => {
      setCountries(await fetchCountries());
      setLoading(true);
    };
    getCountries();
  }, [setCountries]);

  const options = countries.sort().map((c) => ({
    label: c,
    value: c,
  }));

  if (!loading)
    return (
      <div className="loading-countries d-flex justify-content-center">
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="loading-countries-txt">Loading countries ..</p>
      </div>
    );
  return (
    <div className="countrypicker-box d-flex">
      <p className="select-msg">You can Search here : </p>
      <Select
        options={options}
        onChange={(e) => onCountryChange(e.value)}
        placeholder="Search for your country .."
      />
      {/* <select
        className="custom-select"
        onChange={(e) => onCountryChange(e.target.value)}
      >
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default CountryPicker;
