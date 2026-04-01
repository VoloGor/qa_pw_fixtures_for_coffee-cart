import { test } from '../fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { totalCheckoutFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Assert cart updated correctly after clicking plus for drinks', async ({ menuPage, cartPage }) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.ESPRESSO_PRICE));

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.ESPRESSO_PRICE, 2));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.CAPPUCCINO_PRICE));

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.CAPPUCCINO_PRICE, 2));
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.ESPRESSO_PRICE, 2));

  await cartPage.assertTotalCheckoutContainsValue(totalCheckoutFormatStr([
    { price: COFFEE_PRICES.ESPRESSO_PRICE, quantity: 2 },
    { price: COFFEE_PRICES.CAPPUCCINO_PRICE, quantity: 2 },
  ]));
});
