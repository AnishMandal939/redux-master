
import {createSlice} from '@reduxjs/toolkit';
import {ordered as cakeOrdered} from '../cake/cakeSlice.js'

const iceCreamInitialState = {
  numOfIceCreams: 20
}

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState: iceCreamInitialState,
  reducers: {
    orderedIceCream: (state, action) => {
      state.numOfIceCreams--;
    },
    restockedIceCream: (state, action) => {
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
