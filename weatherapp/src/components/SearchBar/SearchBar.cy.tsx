import React from "react";
import SearchBar from "./SearchBar";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../App";

describe("<SearchBar />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ApolloProvider client={client}>
        <SearchBar />
      </ApolloProvider>
    );
  });
});
