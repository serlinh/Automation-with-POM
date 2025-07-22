class DashboardPage {
  verifyDashboardVisible() {
    cy.url().should('include', '/dashboard');
    cy.get('h6').should('contain.text', 'Dashboard');
  }

  verifySidePanelVisible() {
    const menuItems = ['Admin', 'PIM', 'Leave', 'Time', 'My Info'];
    menuItems.forEach((item) => {
      cy.get('nav').contains(item).should('be.visible');
    });
  }

  clickAdmin() {
    cy.get('nav').contains('Admin').click();
  }

  clickPIM() {
    cy.get('nav').contains('PIM').click();
  }

  clickLeave() {
    cy.get('nav').contains('Leave').click();
  }

  clickTime() {
    cy.get('nav').contains('Time').click();
  }

  clickMyInfo() {
    cy.get('nav').contains('My Info').click();
  }
}

export default DashboardPage;
