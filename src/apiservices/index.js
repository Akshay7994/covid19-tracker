import axios from "axios";

const baseUrl = "https://covid19.mathdro.id/api";

export const fetchHigherLevelData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(baseUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(baseUrl + "/daily");

    const modifiedData = data.map(dailydata => ({
      confirmed: dailydata.confirmed.total,
      deaths: dailydata.deaths.total,
      date: dailydata.reportDate
    }));
    return modifiedData;
  } catch (error) {}
};
