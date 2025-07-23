/// <reference types="cypress" />

describe('Reqres API Testing', () => {
  it('Test API Login User Successfully', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
    });
  });

  it('Test API Login User Unsuccessfully', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      failOnStatusCode: false,
      body: {
        email: 'peter@klaven'
        // no password
      }
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error', 'Missing password');
    });
  });
});
