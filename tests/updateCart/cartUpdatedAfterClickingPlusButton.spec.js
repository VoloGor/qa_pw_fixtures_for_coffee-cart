import { test } from '../_fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { ESPRESSO_PRICE, CAPPUCCINO_PRICE } from '../../src/constants';

test('Assert cart updated correctly after clicking plus for drinks', async ({ menuPage, cartPage }) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(ESPRESSO_PRICE));

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(ESPRESSO_PRICE * 2));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(CAPPUCCINO_PRICE));

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(priceFormatStr(CAPPUCCINO_PRICE * 2));
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(ESPRESSO_PRICE * 2));

  await cartPage.assertTotalCheckoutContainsValue(priceFormatStr(ESPRESSO_PRICE * 2 + CAPPUCCINO_PRICE * 2));
});
