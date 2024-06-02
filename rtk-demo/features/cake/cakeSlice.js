const createSlice = require('@reduxjs/toolkit').createSlice

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

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
