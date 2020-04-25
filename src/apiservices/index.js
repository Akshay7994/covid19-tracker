import axios from "axios";

const baseUrl = "https://covid19.mathdro.id/api";

const baseURL1 = "https://api.covid19api.com";

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

export const fetchCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(baseUrl + "/countries");

    return countries.map(country => country.name);
  } catch (error) {}
};

export const fetchCountryLevelData = async country => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(baseUrl + "/countries/" + country);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchCountryWiseCoronaCasesData = async () => {
  try {
    const {
      data: { Countries }
    } = await axios.get(baseURL1 + "/summary");
    const modifiedData = Countries.sort((a, b) =>
      a.TotalConfirmed < b.TotalConfirmed ? 1 : -1
    );
    return modifiedData;
  } catch (error) {}
};
