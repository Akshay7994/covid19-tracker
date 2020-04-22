import React from "react";
import "./App.css";
import { ScrollableCovidTrackerTabs, ButtonAppBar } from "./components";
import styles from "./App.module.css";
import { fetchHigherLevelData } from "./apiservices";

class App extends React.Component {
  state = {};

  // async componentDidMount() {
  //   const highlevelData = await fetchHigherLevelData();
  //   this.setState({ globalData: highlevelData });
  // }

  render() {
    return (
      <div>
        <div>
          <ButtonAppBar />
        </div>
        <div className={styles.container}>
          <ScrollableCovidTrackerTabs />
        </div>
      </div>
    );
  }
}

export default App;
