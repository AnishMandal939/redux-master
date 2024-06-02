const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice.js');
const iceCreamReducer = require('../features/icecream/iceCreamSlice.js');
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer
  }
});

module.exports = store;
