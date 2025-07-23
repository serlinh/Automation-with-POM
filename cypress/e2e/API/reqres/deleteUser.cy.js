/// <reference types="cypress" />

describe('Reqres API Testing', () => {
  it('Test API Delete User', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
