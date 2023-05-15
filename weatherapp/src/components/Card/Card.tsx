import { Context } from "../Context/Context";
import styles from "./Card.module.scss";
import { useContext } from "react";

import city from "../../assets/city.png";

const Card = () => {
  const { weatherData }: any = useContext(Context);

  return (
    <>
      <section className={styles.Card__wrapper}>
        <div className={styles.Card__container}>
          {weatherData[0] ? (
            <>
              <h1>
                {weatherData[0].weather.cityName
                  ? weatherData[0].weather.cityName
                  : ""}
              </h1>
              <img className={styles.weather__image} src={city} />

              <h2>
                {weatherData[0].weather.currentWeather.temp
                  ? `${weatherData[0].weather.currentWeather.temp}C`
                  : "No temp available"}
              </h2>
            </>
          ) : (
            <h2>Search for a valid city</h2>
          )}
        </div>
      </section>
    </>
  );
};

export default Card;
