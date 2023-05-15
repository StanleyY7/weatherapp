import { createContext, useState } from "react";

export const Context = createContext({
  weatherData: [],
  setWeatherData: (weatherData: any) => {},
});

const CProvider: any = (props: any) => {
  const [weatherData, setWeatherData]: any = useState([]);

  return (
    <>
      <Context.Provider
        value={{
          weatherData,
          setWeatherData,
        }}
      >
        {props.children}
      </Context.Provider>
    </>
  );
};

export default CProvider;
