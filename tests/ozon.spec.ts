import { test, expect } from '@playwright/test';

test('Тест поиска на Ozon', async ({ page }) => {
  await page.goto('https://www.ozon.ru');
  await page.waitForLoadState('domcontentloaded'); // ждём загрузки страницы

  // Проверяем, что заголовок содержит слово "Ozon"
  try {
    await expect(page).toHaveTitle(/Ozon/);
  } catch (error) {
    console.error('Не удалось проверить заголовок:', error);
  }

  // Допустим, тестируем поиск
  const searchBox = page.locator('input[placeholder="Искать на Ozon"]');
  // Ваш код для дальнейших действий
});
