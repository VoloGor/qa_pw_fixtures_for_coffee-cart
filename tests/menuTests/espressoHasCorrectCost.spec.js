import { test } from '../_fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { ESPRESSO_PRICE } from '../../src/constants';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {

  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue(priceFormatStr(ESPRESSO_PRICE));
});
