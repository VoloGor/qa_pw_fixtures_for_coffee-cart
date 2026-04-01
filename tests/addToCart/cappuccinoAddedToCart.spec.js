import { test } from '../_fixtures/fixtures';
import { unitPriceFormatStr, priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { CAPPUCCINO_PRICE } from '../../src/constants';

test('Check Cappuccino correctly added to the Cart', async ({ menuPage, cartPage }) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    unitPriceFormatStr(CAPPUCCINO_PRICE, 1)
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(CAPPUCCINO_PRICE, 1)
  );
});
