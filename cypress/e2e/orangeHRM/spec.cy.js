import LoginPage from '../pom/loginPage';
import DashboardPage from '../pom/dashboardPage';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('OrangeHRM - POM Style', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();
    dashboardPage.verifyDashboardVisible();
  });

  it('should display all main menu items in the side panel', () => {
    dashboardPage.verifySidePanelVisible();
  });

  it('should navigate to Admin page', () => {
    dashboardPage.clickAdmin();
    cy.url().should('include', '/admin/viewSystemUsers');
  });

  it('should navigate to PIM page', () => {
    dashboardPage.clickPIM();
    cy.url().should('include', '/pim/viewEmployeeList');
  });

  it('should navigate to Leave page', () => {
    dashboardPage.clickLeave();
    cy.url().should('include', '/leave/viewLeaveList');
  });

  it('should navigate to Time page', () => {
    dashboardPage.clickTime();
    cy.url().should('include', '/time/viewEmployeeTimesheet');
  });

  it('should navigate to My Info page', () => {
    dashboardPage.clickMyInfo();
    cy.url().should('include', '/pim/viewPersonalDetails');
  });
});
