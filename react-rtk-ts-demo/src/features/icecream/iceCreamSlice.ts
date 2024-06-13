
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ordered as cakeOrdered} from '../cake/cakeSlice.js'

type IceCreamInitialState = {
  numOfIceCreams: number
}
const iceCreamInitialState: IceCreamInitialState = {
  numOfIceCreams: 20
}

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState: iceCreamInitialState,
  reducers: {
    orderedIceCream: (state) => {
      state.numOfIceCreams--;
    },
    restockedIceCream: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    }
  },
  extraReducers:(builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--
    })
  }
});

 export default iceCreamSlice.reducer;
export const {orderedIceCream, restockedIceCream} = iceCreamSlice.actions;
