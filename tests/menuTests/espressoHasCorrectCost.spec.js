import { test } from '../fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {

  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue(priceFormatStr(COFFEE_PRICES.ESPRESSO_PRICE));
});
