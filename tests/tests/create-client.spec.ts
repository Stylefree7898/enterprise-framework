import { test, expect } from '@playwright/test';

test('Step 1: Create a New Unique Client Only Once', async ({ page }) => {
  const uniqueId = Date.now(); 
  const dynamicClientName = `Automated Org ${uniqueId}`;
  const dynamicAdminEmail = `org_${uniqueId}@yopmail.com`;

  // Super Admin Login
  await page.goto('https://superadmin.symulate-dev.weuno.co/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('superadmin@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Go to Organizations Page
  await page.getByRole('link', { name: 'Clients', exact: true }).click();
  await expect(page).toHaveURL(/.*organizations/);

  // Form Submission
  await page.getByRole('button', { name: 'Create Client' }).click();
  await page.getByRole('textbox', { name: 'Client Name *' }).fill(dynamicClientName);
  await page.getByRole('textbox', { name: 'Admin Name *' }).fill('Executive Management Admin');
  await page.getByRole('textbox', { name: 'Admin Email *' }).fill(dynamicAdminEmail);
  await page.getByRole('button', { name: 'Create' }).click();

  // Validation
  await expect(page.getByText('Created Successfully')).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('cell', { name: dynamicClientName, exact: true })).toBeVisible();

  // Print on console so you can copy the generated name if needed
  console.log(`>>> CLIENT CREATED SUCCESSFULLY: ${dynamicClientName}`);
});