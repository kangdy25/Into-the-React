import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: {name: 'kim', age: 20},

    reducers: {
        changeName(state) {
            state.name = 'park';
        }
    }
})

export let {changeName} = user.actions

let cartData = createSlice({
    name: 'data',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1},
    ], 
    reducers: {
        plusLike(state, index) {
            let idNum = state.findIndex((a)=>{return a.id === index.payload})
            state[idNum].count += 1;
        },
        addItem(state, action) {
            let overlap = state.findIndex((a)=>{return a.id === action.payload.id})
            if (overlap >= 0) {
                state[overlap].count += 1;
            } else {
                state.push(action.payload);
            }
        },
        deleteItem(state, action) {
            let minusOne = state.findIndex((a)=>{return a.id === action.payload})
            if (state[minusOne].count >= 2) {
                state[minusOne].count--;
            } else {
                state.splice(minusOne, 1);
            }

        }
    }
})

export let {plusLike, addItem, deleteItem} = cartData.actions

export default configureStore({
    reducer: {
        cartData: cartData.reducer,
        user: user.reducer,
    }
}) 