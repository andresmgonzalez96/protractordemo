
import {LoginServices} from '../page_objects/login/login_services';

describe('Login', () => {

  it('user should be able to log in', () => {
      let loginServices = new LoginServices();
      loginServices.get("https://100.26.183.102:8181/erpsaas/erpsaas/PRB_10");
      loginServices.writeUsername("clouderp@psl.com.co");
      loginServices.writePass("clouderp456");
      loginServices.clickLogin();
  });
});