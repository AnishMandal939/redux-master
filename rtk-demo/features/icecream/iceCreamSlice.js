const createSlice = require('@reduxjs/toolkit').createSlice;
const {cakeActions} = require('../cake/cakeSlice.js')
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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--
    })
  }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
