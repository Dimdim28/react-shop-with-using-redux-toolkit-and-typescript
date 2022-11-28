export enum SortPropertyEnum {
    RATING = 'ratingAsk',
    PRICE_ASK = 'priceAsk',
    PRICE_DESK = 'price',
    TITLE = 'title'
}

export type Sort = {
    name: string;
    sortProperty: SortPropertyEnum;
}

export interface FilterSliceState {
    searchValue: string;
    categoryId: number,
    sort: Sort;
}
