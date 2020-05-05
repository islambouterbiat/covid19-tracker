import axios from "axios";

const api = "https://covid19api.io/api/v1";
const api2 = "https://covid19.mathdro.id/api";

// export const fetchData = async (country) => {
//   let changeableUrl = `${api}/Allreports`;
//   if (country) {
//     changeableUrl = `${api}/ReportsByCountries/${country}`;
//     try {
//       const {
//         data: { report },
//       } = await axios.get(changeableUrl);
//       console.log(report);
//       return report;
//     } catch (ex) {
//       console.log(ex);
//     }
//   }

export const fetchData = async (country) => {
  if (country) {
    try {
      const {
        data: { reports },
      } = await axios.get(`${api}/Allreports`);
      const data = reports[0].table[0];
      return data.filter((c) => c.Country === country);
    } catch (ex) {
      console.log(ex);
    }
  }
  try {
    const {
      data: { reports },
    } = await axios.get(`${api}/Allreports`);
    const data = reports[0].table[0];
    return data.filter((c) => c.Country === "World");
  } catch (ex) {
    console.log(ex);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${api2}/daily`);
    const specifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return specifiedData;
  } catch (ex) {
    console.log(ex);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { reports },
    } = await axios.get(`${api}/Allreports`);
    const countries = reports[0].table[0];
    return countries.map((country) => country.Country);
  } catch (ex) {
    console.log(ex);
  }
};

export const fetchFlags = async (country) => {
  try {
    const {
      data: {
        report: { flag },
      },
    } = await axios.get(`${api}/ReportsByCountries/${country}`);
    return flag;
  } catch (ex) {
    console.log(ex);
  }
};
