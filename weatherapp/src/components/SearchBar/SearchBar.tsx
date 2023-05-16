import styles from "./SearchBar.module.scss";
import { useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../GraphQL/Queries";
import { Context } from "../Context/Context";

const SearchBar = () => {
  const [city, setCity] = useState("");

  const { setWeatherData, weatherData } = useContext(Context);

  const { data, error } = useQuery(GET_WEATHER_QUERY, {
    variables: { city },
  });

  if (error) {
    console.log(error);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCity(e.target.value);
    setWeatherData([data]);
    console.log(weatherData);
  };

  return (
    <>
      <section className={styles.SearchBar__wrapper}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.SearchBar}>
            <input
              type="text"
              required
              maxLength={21}
              placeholder="Search for a city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SearchBar;
