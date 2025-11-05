import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Page', () => {
  test('Valid login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('inomaliya13@gmail.com', '1994naruto1994');
    await expect(page).toHaveURL(/dashboard|home/); 
  });

  test('Invalid credentials show error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('invalid@test.com', 'wrongpass');
    await login.assertLoginError('Invalid to login');
  });

  test('Empty fields show validation messages', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.signInButton.click();
    await login.page.getByText('Please, enter your email address', { exact: true }).waitFor();
    await login.page.getByText('The Password is required', { exact: true }).waitFor();
  });

  test('OAuth buttons visible', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.assertOAuthButtonsVisible();
  });
});
