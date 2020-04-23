import axios from "axios";

const api = "https://covid19api.io/api/v1/Allreports";

export const fetchData = async () => {
  const {
    data: { reports },
  } = await axios.get(api);
  return { reports };
};
