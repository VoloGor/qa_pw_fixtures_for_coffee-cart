import { test } from '../fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({ menuPage, cartPage }) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.ESPRESSO_PRICE));
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.MOCHA_PRICE, 0.5));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.CAPPUCCINO_PRICE));
  await cartPage.assertAmericanoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.AMERICANO_PRICE));
});
