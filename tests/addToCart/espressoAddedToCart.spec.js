import { test } from '../_fixtures/fixtures';
import { getPriceForQuantity } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Check Espresso correctly added to the Cart', async ({ menuPage, cartPage }) => {
      
  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(
    getPriceForQuantity(COFFEE_PRICES.ESPRESSO_PRICE).unitPriceFormatStr(1)
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    getPriceForQuantity(COFFEE_PRICES.ESPRESSO_PRICE).priceFormatStr(1)
  );
});