import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, SortPropertyEnum } from '../filter/types';

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

export const { setSearchValue, setCategoryId, setSort, setFilters } =
    filterSlice.actions;

export default filterSlice.reducer;
