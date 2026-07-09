import { expect, test } from '@playwright/test';

import { TaskFactory } from '@data/factories/TaskFactory';
import LoginHelper from '@helpers/LoginHelper';
import { ClientPage } from '@pages/client/ClientPage';
import { CreateClientPage } from '@pages/client/CreateClientPage';
import { RolePlayTask } from '@pages/tasks/RolePlayTask';
import { TaskPage } from '@pages/tasks/TaskPage';

test('Step 2: Create Professional Role Play Task', async ({ page }) => {
  const taskPage = new TaskPage(page);
  const rolePlay = new RolePlayTask(page);
  const clientPage = new ClientPage(page);
  const createClientPage = new CreateClientPage(page);
  const task = TaskFactory.createRolePlay();

  await LoginHelper.login(page);

  const uniqueId = Date.now();
  const dynamicClientName = `Automated Org ${uniqueId}`;
  const dynamicAdminEmail = `org_${uniqueId}@yopmail.com`;

  await clientPage.open();
  await clientPage.clickCreateClient();
  await createClientPage.create({
    clientName: dynamicClientName,
    adminName: 'Executive Management Admin',
    adminEmail: dynamicAdminEmail
  });

  await expect(page.getByText('Created Successfully')).toBeVisible({
    timeout: 10000
  });
  await expect(page.getByRole('cell', { name: dynamicClientName, exact: true })).toBeVisible();

  await taskPage.open();
  await rolePlay.create(task);
});