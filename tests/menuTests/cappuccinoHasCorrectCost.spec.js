import { test } from '../_fixtures/fixtures';
import { getPriceForQuantity } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {

  await menuPage.open();

  await menuPage.assertCappuccinoCupCostHasValue(getPriceForQuantity(COFFEE_PRICES.CAPPUCCINO_PRICE).priceFormatStr());
});
