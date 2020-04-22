import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./countries.module.css";

import { fetchCountries } from "../../apiservices";

const Countries = props => {
  const [fetchedCountries, setfetchedCountries] = useState([]);
  useEffect(() => {
    const fetchCountriesApi = async () => {
      setfetchedCountries(await fetchCountries());
    };
    fetchCountriesApi();
  }, [setfetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={e => {
          props.handleCountryChange(e.target.value);
        }}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
