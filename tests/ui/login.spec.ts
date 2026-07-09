import { test } from '@core';

test('Super Admin Login', async ({ loginPage, homePage }) => {
  await loginPage.loginAsSuperAdmin();

  await homePage.verifyHomePage();
});