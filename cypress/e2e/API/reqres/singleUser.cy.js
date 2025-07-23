/// <reference types="cypress" />

describe('Reqres API Testing', () => {
  
  it('Test API Single User', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/2',
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.null;
      expect(response.body.data).to.have.property('id', 2);
      expect(response.body.data).to.have.property('email');
      expect(response.body.data).to.have.property('first_name');
      expect(response.body.data).to.have.property('last_name');
    });
  });

  it('Test API Single User Not Found', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/23',
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      failOnStatusCode: false // agar tidak dianggap gagal otomatis
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.not.have.property('data');
      expect(response.body).to.not.have.property('support');
    });
  });

});
