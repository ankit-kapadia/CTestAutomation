import locatorValue from "../objectRepo.json";

export class LogoutPage {
    getTitle = () => {
        return cy.get(locatorValue["logoutPageTitle"])
    }

    getTeamInputTextbox = () => {
        return cy.get(locatorValue["logoutPageTitle"])
    }
}