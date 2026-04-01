import { test } from '../_fixtures/fixtures';
import { getPriceForQuantity } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Check Cappuccino correctly added to the Cart', async ({ menuPage, cartPage }) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    getPriceForQuantity(COFFEE_PRICES.CAPPUCCINO_PRICE).unitPriceFormatStr(1)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    getPriceForQuantity(COFFEE_PRICES.CAPPUCCINO_PRICE).priceFormatStr(1)
  );
});
