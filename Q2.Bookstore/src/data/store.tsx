import { createSlice, configureStore } from '@reduxjs/toolkit';

const user = createSlice({
    name : 'user',
    initialState: {id: 1, name: '백두현', pos: 'BE'},
    reducers: {
        changeName(state) {
            state.name = '김철수'
        },
        increase(state) {
            state.id += 1;
        }
    }
})

export const {changeName, increase} = user.actions;

const stock = createSlice({
    name : 'stock',
    initialState : [500, 600, 700],
    reducers : {}
})

export interface CartItem {
    id : number;
    name : string;
    quantity : number;
    price : number;
}

export interface CartArray {
    cart : CartItem[];
}

const cart = createSlice({
    name : 'cart',
    initialState: {
        cart : [
            {id : 1, name: '책 1', quantity: 1, price: 33333},
            {id : 2, name: '책 2', quantity: 1, price: 54252},
        ],
    } as CartArray,
    reducers: {}
})


export default configureStore({
    reducer: {
        stock : stock.reducer,
        cart: cart.reducer,
        user: user.reducer
    }
})