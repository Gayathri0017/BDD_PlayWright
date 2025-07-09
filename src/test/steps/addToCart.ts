import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixtures";
import HeaderPage from "../../pages/headerPage";
import AddToCart from './../../pages/addToCartPage';
import { PassThrough } from "stream";
let headerPage: HeaderPage;
let addToCart:AddToCart;
   When('the user search for the product {string}', async function (productName) {
    headerPage=new HeaderPage(pageFixture.page);
    addToCart=new AddToCart(pageFixture.page);
    await headerPage.searchForBook(productName);
});
    When('the user add the book to the cart', async function () {
        await addToCart.AddToCart();
    });

Then('the product should be added to the cart', async function () {
    let c=await addToCart.verifyCount();
    console.log(c);
    // expect(c).toBeGreaterThan(0);
});


