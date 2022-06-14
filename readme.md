I have created a basic page object meodel framework using cypress. I have tried to keep it as simple as possible. Below the important paths:
1. test file path: cypress\e2e\test.cy.js
2. pages file path: cypress\pages\
3. locators file path: cypress\helpers\objectRepo.json
4. report path: cypress\reports\index.html (A new file will be created for every run.)
5. Manual Testcases Path: root directory/Celonis_Testcases.xlsx
To execute the project execute the below command from the base folder:
npm test
In this case the browser name and env can be changed in package.json(line number: 9). This can also be configured from command line.
Or
npm install
and then
npx cypress run --env env=QA --browser chrome
Browser name & env is configurable from the command. I have tested the execution on chrome and electron browser.
The command can be ran from terminal. I have tested the code on MacOS and I believe the code should execute properly on Unix as well.
The current setup is using "ankitkapadia948@gmail.com". The user name is mentioned cypress\helpers\utility.js. This can also be passed from the command line similar to browser, however for simplicity purpose I have given in the utility file.
Below are the functionalities automated:
1. Successful Login & Logout Test.
2. Check Process Analytics Link & 3 demos.

The tests will execute in headless mode, however we can execute it in head mode with --headed parameter.

These tests can also be dokerised and executed on a container. For that we need to run the below mentioned commands:
npm install
docker run -it -v $PWD:/<Name of the root folder> -w /<Name of the root folder> -e cypress cypress/included:10.1.0
Note: For the above command to run we need to install docker from https://docs.docker.com/get-docker/. After installation just open Docker once on local. After installing and opening docker the above command should work.