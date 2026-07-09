import { expect, Locator, Page } from '@playwright/test';

import { BasePage } from '@core';

export class ClientPage extends BasePage {
  readonly clientsMenu: Locator;
  readonly createClientButton: Locator;
  readonly pageHeading: Locator;

  constructor(page: Page) {
    super(page);

    this.clientsMenu = page.getByRole('link', {
      name: 'Clients',
      exact: true
    });

    this.createClientButton = page.getByRole('button', {
      name: 'Create Client'
    });

    this.pageHeading = page.getByRole('heading', {
      name: 'Clients'
    });
  }

  /**
   * Navigate to Clients page
   */
  async open(): Promise<void> {
    await this.clientsMenu.click();

    await expect(this.pageHeading).toBeVisible();
  }

  /**
   * Click Create Client button
   */
  async clickCreateClient(): Promise<void> {
    await this.createClientButton.click();
  }

  /**
   * Verify Clients page is loaded
   */
  async verifyLoaded(): Promise<void> {
    await expect(this.pageHeading).toBeVisible();

    await expect(this.createClientButton).toBeVisible();
  }
}