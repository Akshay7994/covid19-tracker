import React from "react";
import SpacingGrid from "../grid/grid";
import styles from "./global.module.css";
import { Charts } from "../../components";
const Global = props => {
  const { confirmed, deaths, recovered, lastUpdate } = props.caseData;

  return (
    <div>
      <div className={styles.container}>
        <SpacingGrid
          gridTitle={"Confirmed"}
          value={confirmed ? confirmed.value : 0}
          lastUpdate={lastUpdate}
        />
        <SpacingGrid
          gridTitle={"Recoveries"}
          value={recovered ? recovered.value : 0}
          lastUpdate={lastUpdate}
        />
        <SpacingGrid
          gridTitle={"Deaths"}
          value={deaths ? deaths.value : 0}
          lastUpdate={lastUpdate}
        />
      </div>
      <Charts />
    </div>
  );
};

export default Global;
