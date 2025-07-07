import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixtures";

Given('the user navigates to the application',{ timeout: 30000 }, async function () {
//     browser=await chromium.launch({ headless: false });
//     page=await browser.newPage();

    await pageFixture.page.goto("https://bookcart.azurewebsites.net/");
});

Given('the user clicks login button', async function () {
    await pageFixture.page.locator("(//span[@class='mdc-button__label'])[2]").click();
});

Given('the user enter the username as {string}', { timeout: 20000 }, async function (string) {
    await pageFixture.page.locator('input[placeholder="Username"]').fill(string);
});

Given('the user enter the password as {string}', async function (password) {
    await pageFixture.page.locator('input[placeholder="Password"]').fill(password);
});

When('the user click on the login button', async function () {
    await pageFixture.page.locator("//span[text()='Login']").click();
});

Then('the login should be success', async function () {
    const text = await pageFixture.page.locator("(//span[@class='mdc-button__label']//span)[1]").textContent();
    await pageFixture.page.waitForTimeout(2000);
    console.log(text);
});
Then('the login should fails', async function () {
    const error = await pageFixture.page.locator("//mat-error[@id='mat-mdc-error-0']").textContent();
    expect(error).toContain("Password is required");
//     await pageFixture.browser.close();
});

