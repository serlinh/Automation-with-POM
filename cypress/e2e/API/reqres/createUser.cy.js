/// <reference types="cypress" />

describe('Reqres API Testing', () => {
  it('Test API Create User', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: {
        name: 'Serlin',
        job: 'QA'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', 'Serlin');
      expect(response.body).to.have.property('job', 'QA');
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });
});
