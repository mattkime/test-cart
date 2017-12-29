const itemTaxExempt = {
  name: '16lb bag of Skittles',
  tax_exempt: true,
  price: 100,
};

const itemTaxed = {
  name: 'Walkman',
  price: 100,
};

const itemTaxExemptImported = {
  name: 'imported bag of Vanilla-Hazelnut Coffee',
  tax_exempt: true,
  imported: true,
  price: 100,
};

const itemImported = {
  name: 'Imported Vespa',
  imported: true,
  price: 100,
};

module.exports = {
	itemTaxExempt,
	itemTaxed,
	itemTaxExemptImported,
	itemImported,
};

