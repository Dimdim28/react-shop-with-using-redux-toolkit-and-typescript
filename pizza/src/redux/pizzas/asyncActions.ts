import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SearchPizzaParams } from "./slice";
import { pizzaItem } from "./types";

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