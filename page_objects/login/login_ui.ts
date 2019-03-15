
import { $, By, element, by } from 'protractor';

export class LoginUI{

    public userNameTexbox = element(by.name("nombre"));
    public passwordTextbox = $("input#contrasenaUsuario");
    public loginButton = element(by.id("btnIngresar"));
}