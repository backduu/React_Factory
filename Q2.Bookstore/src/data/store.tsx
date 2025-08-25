import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";


const user = createSlice({
    name : 'user',
    initialState: {id: 1, name: '백두현', pos: 'BE'},
    reducers: {
        changeName(state) {
            state.name = '김철수'
        },
        increase(state, action) {
            state.id += action.payload;
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
        cart : [],
    } as CartArray,
    reducers: {
        plusCount(state, action) {
            const item = state.cart.find((item) => item.id === action.payload);
            if(item) {
                item.quantity++;
            }
        }, 
        minusCount(state, action) {
            const item = state.cart.find((item) => item.id === action.payload);
            if(item && item.quantity > 0) {
                item.quantity--;
            }
        },
        addItem(state, action) {
            const existItem = state.cart.find((item) => item.id === action.payload.id);
            
            if(existItem) {
                existItem.quantity++;
            } else {
                state.cart.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    quantity: 1,
                    price: action.payload.price,
                });
            }
        },
        resetCart(state) {
            state.cart = [];
        }
    }
})

export const {plusCount, minusCount, addItem, resetCart} = cart.actions;

{/* 카트 데이터 유지하기 */}
const rootReducer = combineReducers({
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
});

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;

