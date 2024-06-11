import {createSlice} from '@reduxjs/toolkit';
// initial state: 2
const initialState = {
  numOfCakes: 10
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState: initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCakes--; // toolkit internally uses immer library for state transaction
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    }
  }
})

export default cakeSlice.reducer;
export const {ordered, restocked} = cakeSlice.actions;
