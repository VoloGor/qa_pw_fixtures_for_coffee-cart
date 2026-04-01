import { test } from '../_fixtures/fixtures';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { ESPRESSO_PRICE } from '../../src/constants';

test('Check Espresso cost is added to Total on menu page', async ({ menuPage }) => {

  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.assertTotalCheckoutContainsValue(totalPriceFormatStr(ESPRESSO_PRICE, 1));
});
