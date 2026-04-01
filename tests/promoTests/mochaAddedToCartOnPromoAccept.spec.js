import { test } from '../_fixtures/fixtures';
import { getPriceForQuantity } from '../../src/common/helpers/getPriceForQuantity';
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

  await cartPage.assertEspressoTotalCostContainsCorrectText(getPriceForQuantity(COFFEE_PRICES.ESPRESSO_PRICE).priceFormatStr());
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(getPriceForQuantity(COFFEE_PRICES.MOCHA_PRICE).priceFormatStr(0.5));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(getPriceForQuantity(COFFEE_PRICES.CAPPUCCINO_PRICE).priceFormatStr());
  await cartPage.assertAmericanoTotalCostContainsCorrectText(getPriceForQuantity(COFFEE_PRICES.AMERICANO_PRICE).priceFormatStr());
});
