import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { fetchCountryWiseCoronaCasesData } from "../../apiservices";
import { fontWeight } from "@material-ui/system";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "rgba(210, 200, 255,0.5)",
    color: theme.palette.common.black,
    fontWeight: "bold"
  },
  body: {
    fontSize: 18
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

const CountryWiseTable = () => {
  const classes = useStyles();
  const [countryWiseData, setcountryWiseData] = useState([]);

  useEffect(() => {
    const fetchDataCountryWiseDataApi = async () => {
      setcountryWiseData(await fetchCountryWiseCoronaCasesData());
    };
    fetchDataCountryWiseDataApi();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Countries</StyledTableCell>
            <StyledTableCell align="right">Total Confirmed</StyledTableCell>
            <StyledTableCell align="right">Total Recovered</StyledTableCell>
            <StyledTableCell align="right">Total Deaths</StyledTableCell>
            <StyledTableCell align="right">New Cases Today</StyledTableCell>
            <StyledTableCell align="right">
              New Recoveries Today
            </StyledTableCell>
            <StyledTableCell align="right">New Deaths Today</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countryWiseData.map(countrywise => (
            <StyledTableRow key={countrywise.Country}>
              <StyledTableCell component="th" scope="row">
                {countrywise.Country}
              </StyledTableCell>
              <StyledTableCell align="right">
                {countrywise.TotalConfirmed}
              </StyledTableCell>
              <StyledTableCell align="right">
                {countrywise.TotalRecovered}
              </StyledTableCell>
              <StyledTableCell align="right">
                {countrywise.TotalDeaths}
              </StyledTableCell>
              <StyledTableCell align="right">
                {countrywise.NewConfirmed}
              </StyledTableCell>
              <StyledTableCell align="right">
                {countrywise.NewRecovered}
              </StyledTableCell>
              <StyledTableCell align="right">
                {countrywise.NewDeaths}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CountryWiseTable;
