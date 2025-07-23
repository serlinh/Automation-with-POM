/// <reference types="cypress" />

describe('Reqres API Testing', () => {
  it('Test API Register User Successfully', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
    });
  });

  it('Test API Register User Unsuccessfully', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      failOnStatusCode: false,
      body: {
        email: 'sydney@fife' // password tidak disertakan
      }
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq('Missing password');
    });
  });
});
