///<reference types="Cypress" />
import {loginScrum} from '../page_objects/loginScrum'
import {newOrganization} from '../page_objects/newOrganization'
import {arhiveOrg} from '../page_objects/arhiveOrg'
const faker = require('@faker-js/faker')

describe('arhiving Organization', () => {

    let orgId;

    const loginInfo = {
        validEmail: 'rale@gmail.com',
        validPass: 'oktsar2090',
        orgName: faker.random.word()
      }


before('login and create org', () => {
    cy.visit('https://cypress.vivifyscrum-stage.com/login')
    loginScrum.login(
      loginInfo.validEmail,
      loginInfo.validPass
    )
    newOrganization.newOrg(loginInfo.orgName);
})

it('arhive Organization', () => {
    cy.intercept({
        method: 'PUT',
        url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/*/status'
    }).as('arhiveOrg')

    arhiveOrg.arhive();
    
    cy.wait('@arhiveOrg').then(interception => {
        orgId = interception.response.body.id;
        expect(interception.response.statusCode).eq(200);
        cy.url().should('include', `https://cypress.vivifyscrum-stage.com/organizations/${orgId}/settings`)
    })


})
})