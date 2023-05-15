import "./App.scss";
import CProvider from "./components/Context/Context";
import MainPage from "./containers/MainPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://weather-graphql.onrender.com/",
  });
  return (
    <>
      <ApolloProvider client={client}>
        <CProvider>
          <MainPage />
        </CProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
