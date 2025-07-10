import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { expect, firefox } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixtures";
import LoginPage from "../../pages/loginpage";
import HeaderPage from "../../pages/headerPage";
import { readCSV } from '../../helper/util/csvReader';
const loginData = readCSV('src/helper/testdata/loginData.csv');
let currentRow = 0;
let loginPage: LoginPage;
let headerPage: HeaderPage;

Given('the user navigates to the application',{ timeout: 30000 }, async function () {
    const baseUrl = process.env.BASEURL;
    if (!baseUrl) {
        throw new Error("BASEURL is not defined in environment variables");
    }
    await pageFixture.page.goto(baseUrl, 
        { timeout: 10000 });
    loginPage = new LoginPage(pageFixture.page);
    headerPage=new HeaderPage(pageFixture.page);
    pageFixture.logger?.info("Navigated to the Application");
});

Given('the user clicks login button', async function () {
    await loginPage.clickLoginBtn();
});

Given('the user enter the username as', { timeout: 20000 }, async function () {
    // await loginPage.enterUsername(this.username);
    const username = loginData[currentRow]?.username || "";
    await loginPage.enterUsername(username);
});

Given('the user enter the password as', async function () {
    const password = loginData[currentRow]?.password || "";
    await loginPage.enterPassword(password);
});

When('the user click on the login button', async function () {
    await loginPage.submitLogin();
    currentRow++;
});

Then('the login should be success', async function () {
    await pageFixture.page.waitForTimeout(2000);
    await headerPage.verifyLoginSuccess();
});
Then('the login should fails', async function () {
    await pageFixture.page.waitForTimeout(2000);
    const error=await loginPage.getErrorMsg();
    expect(error).toContain("Password is required");
});

