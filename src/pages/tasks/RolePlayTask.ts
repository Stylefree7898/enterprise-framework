import { expect, Page } from '@playwright/test';
import { TaskPage } from './TaskPage';
import { Task } from 'src/models';

export class RolePlayTask extends TaskPage {

  constructor(page: Page) {
    super(page);
  }

  async create(task: Task): Promise<void> {

    // =========================
    // STEP 1
    // =========================

    await this.clickCreateTask();

    await this.uploadThumbnail(task.thumbnail);

    await this.selectTaskType('Role Play');

    await this.fillTaskName(task.taskName);

    await this.selectPermissionLevel(task.permissionLevel);

    await this.fillScenario(task.description);

    // Skills - sirf click/select (search nahi)
    await this.selectSkill(task.skill);

    await this.clickNext();

    // =========================
    // STEP 2 - PERSONA
    // =========================

    await this.selectPersona(task.persona);

    await this.clickNext();

    // =========================
    // STEP 3 - CONTACT
    // =========================

    await this.configureContact(task.contactTitle);

    await this.save();
  }

  private async selectPersona(persona: string): Promise<void> {

    await this.page
      .getByRole('button', {
        name: persona,
        exact: true
      })
      .first()
      .click();
  }

  private async configureContact(title: string): Promise<void> {

    const titleTextbox = this.page.getByRole('textbox', {
      name: /Title/i
    });

    await expect(titleTextbox).toBeVisible();

    await titleTextbox.fill(title);
  }

  private async save(): Promise<void> {

    await this.page.getByRole('button', {
      name: 'Save & Finish'
    }).click();

    await this.verifyCreated();
  }

  private async verifyCreated(): Promise<void> {

    // Wait until save request completes
    await this.page.waitForLoadState('networkidle');

    // Wait until Create Task button appears again
    await expect(
      this.page.getByRole('button', {
        name: 'Create Task'
      })
    ).toBeVisible({
      timeout: 30000
    });

  }

}