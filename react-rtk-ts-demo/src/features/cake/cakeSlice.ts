import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// initial state: 2
type InitialState = {
  numOfCakes: number
}

const initialState: InitialState = {
  numOfCakes: 10
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--; // toolkit internally uses immer library for state transaction
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    }
  }
})

export default cakeSlice.reducer;
export const {ordered, restocked} = cakeSlice.actions;
