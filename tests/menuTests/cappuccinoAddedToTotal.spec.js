import { test } from '../_fixtures/fixtures';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { CAPPUCCINO_PRICE } from '../../src/constants';

test('Check Cappuccino cost is added to Total on menu page', async ({ menuPage }) => {

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(totalPriceFormatStr(CAPPUCCINO_PRICE, 1));
});
