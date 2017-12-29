const receiptMaker = require('./receiptMaker');
const testMockData = require('./testMockData');

describe('receiptMaker', () => {
  it('calculates tax, rounding up to nearest nickel', () => {
    // TODO closer look
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
	const itemQty = { qty: 1, item: testMockData.itemTaxExempt }
	receiptMaker.calcItemQtyTaxes(itemQty);
    expect(itemQty.taxes).toEqual({});

	receiptMaker.calcItemQtyTotals(itemQty);

    expect(itemQty.taxesTotal).toEqual(0);
    expect(itemQty.pricePlusTax).toEqual(100);

	const itemQty2 = { qty: 1, item: testMockData.itemTaxed }
    expect(receiptMaker.calcItemQtyTaxes(itemQty2).taxes).toEqual({ sales : 10 });

	const itemQty3 = { qty: 1, item: testMockData.itemTaxExemptImported }
    expect(receiptMaker.calcItemQtyTaxes(itemQty3).taxes).toEqual({ import : 5 });

	const itemQty4 = { qty: 1, item: testMockData.itemImported }
    expect(receiptMaker.calcItemQtyTaxes(itemQty4).taxes).toEqual({ sales : 10 , import : 5});

	//const mockBasket = [itemQty, itemQty2, itemQty3, itemQty4];
	//receiptMaker.calcItemQtyTotals(mockBasket);

  });

  it('calculates totals', () => {
	const mockBasket = [
		{ qty: 2, item: testMockData.itemTaxExempt },
		{ qty: 1, item: testMockData.itemTaxed },
		{ qty: 1, item: testMockData.itemTaxExemptImported },
		{ qty: 1, item: testMockData.itemImported },
	];


  });
});
