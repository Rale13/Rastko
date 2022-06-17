///<reference types="Cypress" />
import {loginScrum} from '../page_objects/loginScrum'
import {newOrganization} from '../page_objects/newOrganization'
const faker = require('@faker-js/faker')

describe('newOrganization', () => {

    let boardId;

    const loginInfo = {
        validEmail: 'rale@gmail.com',
        validPass: 'oktsar2090',
        orgName: faker.random.word()
      }

before('login', () => {
    cy.visit('https://cypress.vivifyscrum-stage.com/login')
    loginScrum.login(
      loginInfo.validEmail,
      loginInfo.validPass
    )
})

it('addOrganization', () => {
    cy.intercept({
        method: 'POST',
        url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/organizations'
    }).as('addOrg')


    newOrganization.newOrg(loginInfo.orgName);
    //newOrganization.okBtn.click();

    cy.wait('@addOrg').then(interception => {
        boardId = interception.response.body.id;
        expect(interception.response.statusCode).eq(201);
        cy.url().should('include', `https://cypress.vivifyscrum-stage.com/organizations/${boardId}/boards`)
    })
})

})