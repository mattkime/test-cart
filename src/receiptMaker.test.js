const receiptMaker = require('./receiptMaker');
const testMockData = require('./testMockData');

describe('receiptMaker', () => {
  it('calculates tax, rounding up to nearest nickel', () => {
    expect(receiptMaker.taxRoundUp5(0, 1)).toEqual(0);
    expect(receiptMaker.taxRoundUp5(1, 1)).toEqual(5);
    expect(receiptMaker.taxRoundUp5(4, 1)).toEqual(5);
    expect(receiptMaker.taxRoundUp5(5, 1)).toEqual(5);
    expect(receiptMaker.taxRoundUp5(9, 1)).toEqual(10);
    expect(receiptMaker.taxRoundUp5(60, 0.1)).toEqual(10);
  });

  it('converts cents to dollars, two decimal places', () => {
    expect(receiptMaker.centsToDollars(1)).toEqual('0.01');
    expect(receiptMaker.centsToDollars(100)).toEqual('1.00');
    expect(receiptMaker.centsToDollars(101)).toEqual('1.01');
  });

  it('calculates taxes, totals', () => {
    const itemQty = { qty: 1, item: testMockData.itemTaxExempt };
    receiptMaker.calcItemQtyTaxes(itemQty);
    expect(itemQty.taxes).toEqual({});

    receiptMaker.calcItemQtyTotals(itemQty);

    expect(itemQty.taxesTotal).toEqual(0);
    expect(itemQty.pricePlusTax).toEqual(100);

    const itemQty2 = { qty: 1, item: testMockData.itemTaxed };
    expect(receiptMaker.calcItemQtyTaxes(itemQty2).taxes).toEqual({ sales: 10 });
    receiptMaker.calcItemQtyTotals(itemQty2);
    expect(itemQty2.taxesTotal).toEqual(10);
    expect(itemQty2.pricePlusTax).toEqual(110);

    const itemQty3 = { qty: 1, item: testMockData.itemTaxExemptImported };
    expect(receiptMaker.calcItemQtyTaxes(itemQty3).taxes).toEqual({ import: 5 });
    receiptMaker.calcItemQtyTotals(itemQty3);
    expect(itemQty3.taxesTotal).toEqual(5);
    expect(itemQty3.pricePlusTax).toEqual(105);

    const itemQty4 = { qty: 1, item: testMockData.itemImported };
    expect(receiptMaker.calcItemQtyTaxes(itemQty4).taxes).toEqual({ sales: 10, import: 5 });
    receiptMaker.calcItemQtyTotals(itemQty4);
    expect(itemQty4.taxesTotal).toEqual(15);
    expect(itemQty4.pricePlusTax).toEqual(115);

    const basket = [itemQty, itemQty2, itemQty3, itemQty4];
    expect(receiptMaker.basketSalesTax(basket)).toEqual(30);
    expect(receiptMaker.basketTotal(basket)).toEqual(430);
  });
});
