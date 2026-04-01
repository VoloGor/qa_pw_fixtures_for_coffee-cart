import { test as base } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';
import { MenuPage } from '../../src/pages/MenuPage';


type ShopFixtures = {
  cartPage: CartPage;
  menuPage: MenuPage;
};
export const test = base.extend<ShopFixtures>({
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  menuPage: async ({ page }, use) => {
    await use(new MenuPage(page));
  },
});

export { expect } from '@playwright/test';
