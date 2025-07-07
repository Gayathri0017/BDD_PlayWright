import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixtures";
   When('the user search for the product {string}', async function (productName) {
    const searchBox = pageFixture.page.locator('input[placeholder="Search books or authors"]');
    await searchBox.fill(productName);
    const name=pageFixture.page.locator("//span[@class='mdc-list-item__primary-text']");
    await name.click();
});
    When('the user add the book to the cart', async function () {
           await pageFixture.page.locator("(//span[@class='mdc-button__label'])[5]").click();
    });

Then('the product should be added to the cart', async function () {
    const badgeLocator = pageFixture.page.locator("//span[@id='mat-badge-content-0']");
    await expect(badgeLocator).not.toHaveText(['0', ''], { timeout: 5000 });
    const count = await badgeLocator.textContent();
    await pageFixture.page.waitForTimeout(2000);
    const num = Number(count);
    console.log(num);
//     expect(num).toBeGreaterThan(0);
});


