import "./App.scss";
import MainPage from "./containers/MainPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/",
  });
  return (
    <>
      <ApolloProvider client={client}>
        <MainPage />
      </ApolloProvider>
    </>
  );
}

export default App;
