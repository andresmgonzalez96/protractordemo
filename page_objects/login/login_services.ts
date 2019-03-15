import { LoginUI } from './login_ui';
import { browser } from 'protractor';

export class LoginServices {

    private loginUI: LoginUI;

    constructor() {
        this.loginUI = new LoginUI();
    }

    get(url: string) {
        browser.waitForAngularEnabled(false);
        browser.get(url);
    }

    writePass(pass: string) {
        this.loginUI.passwordTextbox.sendKeys(pass);
    }

    writeUsername(username: string) {
        this.loginUI.userNameTexbox.sendKeys(username);
    }

    clickLogin() {
        this.loginUI.loginButton.click();
        browser.sleep(9000);
    }
}