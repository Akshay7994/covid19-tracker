import React, { useState, useEffect } from "react";
import SpacingGrid from "../grid/grid";
import styles from "./global.module.css";
import { Charts, Countries } from "../../components";
import {
  fetchHigherLevelData,
  fetchCountryLevelData
} from "../../apiservices/";
const Global = props => {
  //const { confirmed, deaths, recovered, lastUpdate } = props.caseData;

  const [highLvlData, sethighLvlData] = useState({});

  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchhighlevelData = async () => {
      sethighLvlData(await fetchHigherLevelData());
    };
    fetchhighlevelData();
    console.log(highLvlData);
  }, []);

  const handleCountryChange = async country => {
    console.log(country);
    if (country != "global") {
      setCountry(country);
      sethighLvlData(await fetchCountryLevelData(country));
    } else {
      setCountry("");
      sethighLvlData(await fetchHigherLevelData());
    }
  };

  return (
    <div className={styles.globalcontainer}>
      <div className={styles.gridcontainer}>
        <SpacingGrid
          gridTitle={"Confirmed"}
          value={highLvlData.confirmed ? highLvlData.confirmed.value : 0}
          lastUpdate={highLvlData.lastUpdate}
        />
        <SpacingGrid
          gridTitle={"Recoveries"}
          value={highLvlData.recovered ? highLvlData.recovered.value : 0}
          lastUpdate={highLvlData.lastUpdate}
        />
        <SpacingGrid
          gridTitle={"Deaths"}
          value={highLvlData.deaths ? highLvlData.deaths.value : 0}
          lastUpdate={highLvlData.lastUpdate}
        />
      </div>
      <Countries handleCountryChange={handleCountryChange} />

      <Charts data={highLvlData} country={country} />
    </div>
  );
};

export default Global;
