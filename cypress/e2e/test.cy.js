import {
  HomePage
 } from "../helpers/pages/homePage.js";

 import {
  LogoutPage
 } from "../helpers/pages/logoutPage.js";

 import {
  ProcessAnalyticsPage
 } from "../helpers/pages/processAnalyticsPage";

 import { Utility } from "../helpers/utility"

const envDetails = new Utility().getEnvDetails();
const homePage = new HomePage();
const logoutPage = new LogoutPage();
const processAnalyticsPage = new ProcessAnalyticsPage();
describe('Test Suite', () => {
    beforeEach(function () {
        cy.clearCookies();
        cy.log(envDetails.url);
        cy.visit(envDetails.url);
        cy.login(envDetails.emailId, envDetails.password);
        homePage.getWelcomeTitle().should(($p) => {
          expect($p).to.contain('Welcome to Apps')
        });
    });

    it('Successful Login & Logout Test', () => {
      homePage.getCelonisLogo().should("exist").should('be.visible');
      homePage.getUserMenuButton().should("exist").should('be.visible');
      homePage.clickUserMenu();
      homePage.getUserNameText().should("have.text", envDetails.userName);
      homePage.clickLogoutButton();
      homePage.getWelcomeTitle().should("not.exist");
      homePage.getUserMenuButton().should("not.exist");
      logoutPage.getTitle().should("have.text", "Sign in to your team");
      logoutPage.getTeamInputTextbox().should("exist").should('be.visible');
    });

    it('Check Process Analytics Link & 3 demos', () => {
      homePage.getMoreLink().should("exist");
      homePage.clickMoreLink();
      homePage.getProcessAnalyticsLink().should("exist");
      homePage.clickProcessAnalyticsLink();
      processAnalyticsPage.getWorkspacesHeader().should("exist").should('be.visible');
      processAnalyticsPage.getPizzaDemoLink().should("exist").should('be.visible');
      processAnalyticsPage.getSAPOrderToCashLink().should("exist").should('be.visible');
      processAnalyticsPage.getSAPPurchaseToPayLink().should("exist").should('be.visible');
      processAnalyticsPage.getServiceNowTicketingLink().should("exist").should('be.visible');
      processAnalyticsPage.getSAPOrderToCashAnalysis().should("exist").should('be.visible');
      processAnalyticsPage.getSAPOrderToCashAnalysisGraph().should("exist").should('be.visible');
      processAnalyticsPage.getPizzaDemoAnalysis().should("exist").should('be.visible');
      processAnalyticsPage.getPizzaDemoAnalysisGraph().should("exist").should('be.visible');
      processAnalyticsPage.getSAPPurchaseToPayAnalysis().should("exist").should('be.visible');
      processAnalyticsPage.getSAPPurchaseToPayAnalysisGraph().should("exist").should('be.visible');
      homePage.clickUserMenu();
      homePage.clickLogoutButton();
    });
})