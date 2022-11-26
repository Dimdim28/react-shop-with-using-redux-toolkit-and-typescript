import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  categoryId: 0,
  sort: { name: "популярности", sortProperty: "rating" },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const selectSort = (state) => state.filter.sort;
export const selectFilter = (state) => state.filter;
// Action creators are generated for each case reducer function
export const { setSearchValue, setCategoryId, setSort, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
