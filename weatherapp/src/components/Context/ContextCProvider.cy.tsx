import React from 'react'
import CProvider from './Context'

describe('<CProvider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CProvider />)
  })
})