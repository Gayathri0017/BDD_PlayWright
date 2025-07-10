import {expect,Page,Locator } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/playwrightWrapper";
export default class AddToCart{
    private base:PlaywrightWrapper;
    constructor(private page:Page)
        {
            this.base=new PlaywrightWrapper(page);
        }
    private CartPageElements={
        cartBtn:"(//span[@class='mdc-button__label'])[5]",
        count:"//span[@id='mat-badge-content-0']",
    }
    async AddToCart(){
        await this.base.waitAndClick(this.CartPageElements.cartBtn);
    }
    async verifyCount(){
        let c=await this.page.textContent(this.CartPageElements.count);
        const num=Number(c?.trim());
        return num;
    }
}