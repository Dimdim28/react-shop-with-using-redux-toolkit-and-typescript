import { RootState } from './../store';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type pizzaItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: number;
  size: number;
  count: number;
}

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

interface pizzaSliceState {
  status: Status;
  items: pizzaItem[],
}


const initialState: pizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

export type SearchPizzaParams = {
  category: string;
  sortBy: string;
  order: string;
  search: string

}

export const fetchPizzas = createAsyncThunk<pizzaItem[], SearchPizzaParams>(
  "pizza/fetchPizzas",
  async (params) => {
    const { category, sortBy, order } = params;
    const { data } = await axios.get<pizzaItem[]>(
      `https://62cd928f066bd2b699287a7a.mockapi.io/items?${category}&sortBy=${sortBy}${order}`
    );
    return data;
  }
);

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  }

});

export const selectPizza = (state: RootState) => state.pizza;

// Action creators are generated for each case reducer function
export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
