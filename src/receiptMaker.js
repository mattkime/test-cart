// @flow
import type { ItemQty } from 'receiptMaker'; // eslint-disable-line

const colors = require('colors/safe');
const _ = require('lodash');
const taxConfig = require('./taxes');


const taxRoundUp5 = (amount: number, tax: number): number =>
  Math.ceil(amount * tax / 5) * 5;
const centsToDollars = (cents: number = 0): string =>
  (cents / 100).toFixed(2);

const calcItemQtyTaxes = (itemQty: ItemQty): ItemQty => {
  itemQty.taxes = taxConfig.reduce((taxHash, tax) => {
    if (tax.condition(itemQty.item)) {
      taxHash[tax.name] = taxRoundUp5(itemQty.item.price * itemQty.qty, tax.percent);
    }
    return taxHash;
  }, {});
  return itemQty;
};

const calcItemQtyTotals = (itemQty: ItemQty): ItemQty => {
  itemQty.taxesTotal = _.reduce(itemQty.taxes, (sum, taxAmount) => sum + taxAmount, 0);
  itemQty.pricePlusTax = (itemQty.item.price * itemQty.qty) + itemQty.taxesTotal;
  return itemQty;
};

const basketSalesTax = (basket: ItemQty[]): number =>
  basket.reduce((total, item) => total + item.taxesTotal, 0);
const basketTotal = (basket: ItemQty[]): number =>
  basket.reduce((total, item) => total + item.pricePlusTax, 0);

const printHeader = (index: number): void =>
  console.log(colors.bold(`Output ${index + 1}:`)); // eslint-disable-line no-console

const printItemQty = (itemQty: ItemQty): void =>
  console.log(`\t${itemQty.qty} ${itemQty.item.name}: ${centsToDollars(itemQty.pricePlusTax)}`); // eslint-disable-line no-console

const printSummary = (basket: ItemQty[]): void => {
  console.log(`\tSales Taxes: ${centsToDollars(basketSalesTax(basket))}`); // eslint-disable-line no-console
  console.log(`\tTotal: ${centsToDollars(basketTotal(basket))}`); // eslint-disable-line no-console
};

const printBasket = (basket: ItemQty[], index: number): void => {
  printHeader(index);
  _.chain(basket)
    .map(calcItemQtyTaxes)
    .map(calcItemQtyTotals)
    .forEach(printItemQty)
    .tap(printSummary)
    .value();
};

const printBaskets = (baskets: Array<Array<ItemQty>>): void => baskets.forEach(printBasket);

module.exports = {
  taxRoundUp5,
  centsToDollars,
  calcItemQtyTaxes,
  calcItemQtyTotals,
  basketSalesTax,
  basketTotal,
  printBaskets,
};
