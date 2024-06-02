const createSlice = require('@reduxjs/toolkit').createSlice;

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
  }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
