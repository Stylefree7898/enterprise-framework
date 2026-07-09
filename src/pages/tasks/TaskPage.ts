import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '@core';
import { Urls } from '@config';

export class TaskPage extends BasePage {
  readonly tasksMenu: Locator;
  readonly createTaskButton: Locator;

  readonly uploadButton: Locator;
  readonly taskTypeDropdown: Locator;
  readonly taskNameTextbox: Locator;
  readonly permissionLevelDropdown: Locator;
  readonly scenarioEditor: Locator;
  readonly nextButton: Locator;

  constructor(page: Page) {
    super(page);

    this.tasksMenu = page.getByRole('link', {
      name: /tasks/i,
      exact: false
    });

    this.createTaskButton = page.getByRole('button', {
      name: /create task/i,
      exact: false
    });

    this.uploadButton = page.getByRole('button', {
      name: 'Upload File',
      exact: true
    });

    this.taskTypeDropdown = page.getByRole('button', {
      name: 'Select Type'
    });

    this.taskNameTextbox = page.getByRole('textbox', {
      name: /Task Name/i
    });

    this.permissionLevelDropdown = page.getByRole('button', {
      name: 'Select Level'
    });

    this.scenarioEditor = page.locator('.tiptap').first();

    this.nextButton = page.getByRole('button', {
      name: 'Next'
    });
  }

  async open(): Promise<void> {
    await this.page.goto(Urls.home, {
      waitUntil: 'domcontentloaded'
    });

    await this.page.waitForLoadState('networkidle');

    const createTask = this.page.getByRole('button', {
      name: /create task/i,
      exact: false
    });

    if (await createTask.isVisible().catch(() => false)) {
      return;
    }

    await this.page.goto(Urls.tasks, {
      waitUntil: 'domcontentloaded'
    });

    await this.page.waitForLoadState('networkidle');

    await expect(createTask).toBeVisible({
      timeout: 30000
    });
  }
}