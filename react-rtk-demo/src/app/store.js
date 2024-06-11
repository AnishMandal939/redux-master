import {uonfigureStore} from '@reduxjs/toolkit';
// const reduxLogger = require('redux-logger');
import cakeReducer from '../features/cake/cakeSlice.js';
import iceCreamReducer from '../features/icecream/iceCreamSlice.js';
import userReducer from '../features/user/userSlice.js';
// const logger = reduxLogger.createLogger();
export default store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer

  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

