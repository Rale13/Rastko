///<reference types="Cypress" />
import {loginScrum} from '../page_objects/loginScrum'

describe('empty spec', () => {

  const loginInfo = {
    validEmail: 'rale@gmail.com',
    validPass: 'oktsar2090'
  }


  it('validLogin', () => {
    cy.intercept({
      method: 'POST',
      url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
    }).as('validLogin')

    cy.visit('https://cypress.vivifyscrum-stage.com/login')
    loginScrum.login(
      loginInfo.validEmail,
      loginInfo.validPass
    )

    cy.wait('@validLogin').then(interception => {
      expect(interception.response.statusCode).eq(200);
    })
  })
})