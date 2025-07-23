/// <reference types="cypress" />

describe('Reqres API Testing', () => {
  it('Test API Delayed Response', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?delay=3',
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('array');
      expect(response.body.data.length).to.be.greaterThan(0);
    });
  });
});
