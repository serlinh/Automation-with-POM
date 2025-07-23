/// <reference types="cypress" />

describe('Reqres API Testing', () => {
  it('Test API List User', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2')
      .then((response) => {
        expect(response.status).to.eq(200); // Validates that the response status is 200 (OK)
        expect(response.body).to.not.be.null; // Validates that the response body is not null
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.be.an('array');
      })
  })
})
