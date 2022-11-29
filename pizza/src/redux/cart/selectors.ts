import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemsById = (id: string) => (state: RootState) => {

    console.log('id =', id, state.cart.items)
    return state.cart.items.find((obj) => obj.title + obj.type + obj.size === id);
}   
