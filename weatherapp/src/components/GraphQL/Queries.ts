import { gql } from "@apollo/client";

export const GET_WEATHER_QUERY = gql`
  query GetWeather($city: String!) {
    weather(city: $city) {
      cityName
      sunrise
      currentWeather {
        temp
        tempLow
      }
    }
  }
`;
