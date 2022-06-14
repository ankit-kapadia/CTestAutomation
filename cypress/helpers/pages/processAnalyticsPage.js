import locatorValue from "../objectRepo.json";

export class ProcessAnalyticsPage {
    getWorkspacesHeader = () => {
        return cy.get(locatorValue["paPageWorkspacesHeader"])
    }

    getPizzaDemoLink = () => {
        return cy.get(locatorValue["paPagePizzaDemoLink"])
    }

    getSAPOrderToCashLink = () => {
        return cy.get(locatorValue["paPageSAPOrderToCashLink"])
    }

    getSAPPurchaseToPayLink = () => {
        return cy.xpath(locatorValue["paPageSAPPurchaseToPayLink"])
    }

    getServiceNowTicketingLink = () => {
        return cy.get(locatorValue["paPageServiceNowTicketingLink"])
    }

    getSAPOrderToCashAnalysis = () => {
        return cy.xpath(locatorValue["paPageSAPOrderToCashAnalysis"])
    }

    getSAPOrderToCashAnalysisGraph = () => {
        return cy.xpath(locatorValue["paPageSAPOrderToCashAnalysisGraph"])
    }

    getPizzaDemoAnalysis = () => {
        return cy.xpath(locatorValue["paPagePizzaDemoAnalysis"])
    }

    getPizzaDemoAnalysisGraph = () => {
        return cy.xpath(locatorValue["paPagePizzaDemoAnalysisGraph"])
    }

    getSAPPurchaseToPayAnalysis = () => {
        return cy.xpath(locatorValue["paPageSAPPurchaseToPayAnalysis"])
    }

    getSAPPurchaseToPayAnalysisGraph = () => {
        return cy.xpath(locatorValue["paPagePSAPPurchaseToPayAnalysisGraph"])
    }
}
