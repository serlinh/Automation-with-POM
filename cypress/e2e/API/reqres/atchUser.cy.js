/// <reference types="cypress" />

describe('Reqres API Testing', () => {
  it('Test API Patch User', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      body: {
        job: 'Quality Assurance Engineer'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('job', 'Quality Assurance Engineer');
      expect(response.body).to.have.property('updatedAt');
    });
  });
});
