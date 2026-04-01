import { test } from '../_fixtures/fixtures';
import { unitPriceFormatStr, priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { ESPRESSO_PRICE } from '../../src/constants';

test('Check Espresso correctly added to the Cart', async ({ menuPage, cartPage }) => {
      
  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(
    unitPriceFormatStr(ESPRESSO_PRICE, 1)
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(ESPRESSO_PRICE, 1)
  );
});