import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styles from "../grid/grid.module.css";
import { Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

const useStyles = makeStyles(theme => ({
  control: {
    padding: theme.spacing(2)
  }
}));

const SpacingGrid = props => {
  if (!props.value) {
    return "loading...";
  }
  return (
    <Grid container spacing={0} justify="center">
      <Grid
        xs={12}
        md={12}
        item
        component={Card}
        className={cx(
          styles.card,
          props.gridTitle == "Confirmed"
            ? styles.confirmed
            : props.gridTitle == "Deaths"
            ? styles.deaths
            : props.gridTitle == "Recoveries"
            ? styles.recovered
            : styles.empty
        )}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {props.gridTitle}
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={props.value}
              duration={2}
              separator={","}
            ></CountUp>
          </Typography>
          <Typography color="textSecondary">
            {new Date(props.lastUpdate).toDateString()}
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default SpacingGrid;
