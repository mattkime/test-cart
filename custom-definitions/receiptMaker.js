declare module 'receiptMaker' {
	declare type Item = {
		name: string,
		price: number,
		tax_exempt?: boolean,
		imported?: boolean
	}
	declare type ItemQty = {
		qty: number,
		item: Item,
		taxes?: {},
		taxesTotal?: number,
		pricePlusTax?: number
	}
}
