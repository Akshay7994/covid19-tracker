import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../apiservices";
import { Line, Bar } from "react-chartjs-2";
import styles from "./charts.module.css";

const Charts = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchDataApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchDataApi();
  }, []);

  const lineChart =
    dailyData.length != 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "Confirmed",
              borderColor: "#3333ff",
              fill: true
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true
            }
          ]
        }}
      />
    ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Charts;
