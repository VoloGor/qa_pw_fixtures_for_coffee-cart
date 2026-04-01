import { test } from '../fixtures/fixtures';
import { getPriceForQuantity } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Check Cappuccino cost is added to Total on menu page', async ({ menuPage }) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(getPriceForQuantity(COFFEE_PRICES.CAPPUCCINO_PRICE).totalPriceFormatStr(1));
});
