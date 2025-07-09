import {expect,Page,Locator } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/playwrightWrapper";
export default class HeaderPage{
    private base:PlaywrightWrapper;
    constructor(private page:Page)
        {
            this.base=new PlaywrightWrapper(page);
        }
    private headerPageElements={
        searchInput:"input[placeholder='Search books or authors']",
        cartBtn:"(//span[@class='mdc-button__label'])[5]",
        cartValue:"(//span[@class='mdc-button__label']//span)[1]",
        sugges:"//span[@class='mdc-list-item__primary-text']",
        loginScs:"(//span[@class='mdc-button__label']//span)[1]",
    }
  async searchForBook(bookName: string) {
    await this.page.fill(this.headerPageElements.searchInput, bookName);
    await this.base.waitAndClick(this.headerPageElements.sugges);
  }
  async AddToCart() {
    await this.base.waitAndClick(this.headerPageElements.cartBtn);
  }
  async verifyLoginSuccess() {
    const loginScsLocator= this.page.locator(this.headerPageElements.loginScs);
    await expect(loginScsLocator).toBeVisible();
  }
}