/// <reference types="cypress" />

describe('Reqres API Testing', () => {
  it('Test API Update User', () => {
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: {
        name: 'Serlin Herdawati',
        job: 'Quality Assurance'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', 'Serlin Herdawati');
      expect(response.body).to.have.property('job', 'Quality Assurance');
      expect(response.body).to.have.property('updatedAt');
    });
  });
});
