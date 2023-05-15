import React from "react";
import MainPage from "./MainPage";
import { ApolloProvider } from "@apollo/client";
import { client } from "../App";

describe("<MainPage />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ApolloProvider client={client}>
        <MainPage />
      </ApolloProvider>
    );
  });
});
