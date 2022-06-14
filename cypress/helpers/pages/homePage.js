import locatorValue from "../objectRepo.json";

export class HomePage {
    getWelcomeTitle = () => {
        return cy.get(locatorValue["homePageWelcomeToApps"])
    }

    getUserMenuButton = () => {
        return cy.get(locatorValue["homePageUserMenu"])
    }

    getUserNameText = () => {
        return cy.get(locatorValue["homePageUserNameText"])
    }

    getLogoutButton = () => {
        return cy.get(locatorValue["homePageLogout"])
    }

    getCelonisLogo = () => {
        return cy.get(locatorValue["homePageCelonisLogo"])
    }

    getProcessAnalyticsLink = () => {
        return cy.get(locatorValue["homePageProcessAnalyticsLink"])
    }

    getMoreLink = () => {
        return cy.contains('span', locatorValue['homePageMoreLink'])
    }

    clickUserMenu = () => {
        this.getUserMenuButton().click();
    }

    clickProcessAnalyticsLink = () => {
        this.getProcessAnalyticsLink().click();
    }

    clickMoreLink = () => {
        this.getMoreLink().click();
    }

    clickLogoutButton = () => {
        this.getLogoutButton().click();
    }
}

