
export class Utility {
    getEnvDetails() {
        var env = Cypress.env('env');
        var dictObject = {};
        if (env.toLowerCase() == 'prod')
        {
            dictObject["url"] = "";
            dictObject["emailId"] = "";
            dictObject["password"] = "";
            dictObject["userName"] = "";
        }
        else if (env.toLowerCase() == 'stg')
        {
            dictObject["url"] = "";
            dictObject["emailId"] = "";
            dictObject["password"] = "";
            dictObject["userName"] = "";
        }
        else if (env.toLowerCase() == 'qa')
        {
            dictObject["url"] = "https://applications.eu-1.celonis.cloud/ui/login";
            dictObject["emailId"] = "ankitkapadia948@gmail.com";
            dictObject["password"] = "Testing@123";
            dictObject["userName"] = "Ankit Paresh Kapadia";
        }
        else
        {
            cy.log("Please provide a proper env (QA, DEV, STG, PROD).");
        }
        return dictObject;
    }
}