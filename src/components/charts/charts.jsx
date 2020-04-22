import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../apiservices";
import { Line, Bar } from "react-chartjs-2";
import styles from "./charts.module.css";

const Charts = props => {
  const [dailyData, setDailyData] = useState([]);

  const { data, country } = props;

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

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)"
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value
            ]
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: "Current state in " + country }
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Charts;
