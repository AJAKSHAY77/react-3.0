import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
      item: []
  },
    reducers: {
        additems: (state,action) => {
            state.item.push(action.payload)
        },

        removeitems: (state,action) => {
            state.item.pop()
        },
        clearcart: (state,action) => {
            state.item = []
        }
        
   }
    
})

export const { additems, removeitems, clearcart } = CartSlice.actions;
export default CartSlice.reducer;