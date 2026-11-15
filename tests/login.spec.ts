import { test, expect } from '@playwright/test';

test('TC-001 - Invalid Credential', async ({ page }) => {
  //precondition
  await page.goto('https://www.emra.chat/login');
  //precondition assertion
  await expect(page.getByText('Welcome Back')).toBeVisible();
  await expect(page.getByText('Don\'t have an account? Sign up')).toBeVisible();
  //steps
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('aziz26@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  //steps assertion
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('TC-002 - Valid Credential', async ({ page }) => {
  //precondition
  await page.goto('https://www.emra.chat/login');
  //precondition assertion
  await expect(page.getByText('Welcome Back')).toBeVisible();
  await expect(page.getByText('Don\'t have an account? Sign up')).toBeVisible();
  //steps
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testingemrachat@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('tester!23');
  await page.getByRole('button', { name: 'Sign In' }).click();
  //steps assertion
  await expect(page.getByRole('heading', { name: 'Welcome to Emra! 🎉' })).toBeVisible();
});