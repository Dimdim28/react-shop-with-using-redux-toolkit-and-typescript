import { RootState } from './../store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

// 'rating' | 'priceAsk' | 'price' | 'title'
export interface FilterSliceState {
  searchValue: string;
  categoryId: number,
  sort: Sort;
}

const initialState: FilterSliceState = {
  searchValue: "",
  categoryId: 0,
  sort: { name: "популярности", sortProperty: SortPropertyEnum.RATING },
};


const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const selectSort = (state: RootState) => state.filter.sort;
export const selectFilter = (state: RootState) => state.filter;
// Action creators are generated for each case reducer function
export const { setSearchValue, setCategoryId, setSort, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
