import { test } from '../_fixtures/fixtures';
import { getPriceForQuantity } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {

  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue(getPriceForQuantity(COFFEE_PRICES.ESPRESSO_PRICE).priceFormatStr());
});
