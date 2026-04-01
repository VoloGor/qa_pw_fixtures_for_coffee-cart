import { test } from '../fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {

  await menuPage.open();

  await menuPage.assertCappuccinoCupCostHasValue(priceFormatStr(COFFEE_PRICES.CAPPUCCINO_PRICE));
});
