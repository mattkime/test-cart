module.exports = [{
  name: 'sales',
  percent: 0.1,
  condition: item => !item.tax_exempt,
}, {
  name: 'import',
  percent: 0.05,
  condition: item => item.imported,
}];
