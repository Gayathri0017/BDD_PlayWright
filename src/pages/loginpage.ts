import {expect,Page,Locator } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/playwrightWrapper";
export default class LoginPage{
    private base:PlaywrightWrapper;
    constructor(private page:Page)
        {
            this.base=new PlaywrightWrapper(page);
        }
    private LoginPageElements={
        loginBtn:"(//span[@class='mdc-button__label'])[2]",
        userName:"input[placeholder='Username']",
        password:"input[placeholder='Password']",
        login:"//span[text()='Login']",
        error:"//mat-error[@id='mat-mdc-error-0']",
    }
    async clickLoginBtn(){
        await this.base.waitAndClick(this.LoginPageElements.loginBtn);
    }
    async loginUser(user:string,pass:string){
        await this.page.fill(this.LoginPageElements.userName,user);
        await this.page.fill(this.LoginPageElements.password,pass);
        await this.base.waitAndClick(this.LoginPageElements.login);
    }
    async getErrorMsg(){
        return await this.page.textContent(this.LoginPageElements.error);
    }
    async enterUsername(username: string) {
        await this.page.fill(this.LoginPageElements.userName, username);
    }

    async enterPassword(password: string) {
        await this.page.fill(this.LoginPageElements.password, password);
    }
    async submitLogin() {
        await this.base.waitAndClick(this.LoginPageElements.login);
    }

}