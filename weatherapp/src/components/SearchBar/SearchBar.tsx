import styles from "./SearchBar.module.scss";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../GraphQL/Queries";
const SearchBar = () => {
  const [getWeather, { loading, data, error }] = useLazyQuery(
    GET_WEATHER_QUERY,
    {
      variables: { name: "Vancouver" },
    }
  );

  if (error) {
    alert("Error!");
  }

  if (data) {
    console.log(data);
  }
  return (
    <>
      <section className={styles.SearchBar__wrapper}>
        <input
          type="text"
          required
          maxLength={21}
          placeholder="Search for a city"
        ></input>
        <button onClick={() => getWeather()}>Submit</button>
      </section>
    </>
  );
};

export default SearchBar;
