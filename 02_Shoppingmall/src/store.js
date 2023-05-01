import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: 'kim',

    reducers: {
        changeName() {
            return 'john kim'
        }
    }
})

export let {changeName} = user.actions

let cartData = createSlice({
    name: 'data',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ], 
    reducers: {
        plusLike(state, index) {
            state[index].count += 1;
        }
    }
})

export let {plusLike} = cartData.actions

export default configureStore({
    reducer: {
        cartData: cartData.reducer,
        user: user.reducer,
    }
}) 