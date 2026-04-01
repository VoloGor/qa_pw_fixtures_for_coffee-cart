import { test } from '../_fixtures/fixtures';
import { getPriceForQuantity } from '../../src/common/helpers/getPriceForQuantity';
import { totalCheckoutFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Assert cart updated correctly after clicking plus for drinks', async ({ menuPage, cartPage }) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(getPriceForQuantity(COFFEE_PRICES.ESPRESSO_PRICE).priceFormatStr());

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(getPriceForQuantity(COFFEE_PRICES.ESPRESSO_PRICE).priceFormatStr(2));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(getPriceForQuantity(COFFEE_PRICES.CAPPUCCINO_PRICE).priceFormatStr());

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(getPriceForQuantity(COFFEE_PRICES.CAPPUCCINO_PRICE).priceFormatStr(2));
  await cartPage.assertEspressoTotalCostContainsCorrectText(getPriceForQuantity(COFFEE_PRICES.ESPRESSO_PRICE).priceFormatStr(2));

  await cartPage.assertTotalCheckoutContainsValue(totalCheckoutFormatStr([
    { price: COFFEE_PRICES.ESPRESSO_PRICE, quantity: 2 },
    { price: COFFEE_PRICES.CAPPUCCINO_PRICE, quantity: 2 },
  ]));
});
