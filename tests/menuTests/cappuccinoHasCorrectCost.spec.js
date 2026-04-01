import { test } from '../_fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { CAPPUCCINO_PRICE } from '../../src/constants';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {

  await menuPage.open();

  await menuPage.assertCappuccinoCupCostHasValue(priceFormatStr(CAPPUCCINO_PRICE));
});
