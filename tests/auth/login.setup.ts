import { test as setup } from '@playwright/test';
import LoginHelper from '@helpers/LoginHelper';

setup('Authenticate Super Admin', async ({ page }) => {
  await LoginHelper.login(page);

  await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });
});