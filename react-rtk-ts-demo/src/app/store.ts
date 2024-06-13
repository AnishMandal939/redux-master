import {configureStore} from '@reduxjs/toolkit';
// const reduxLogger = require('redux-logger');
import cakeReducer from '../features/cake/cakeSlice.ts';
import iceCreamReducer from '../features/icecream/iceCreamSlice.ts';
import userReducer from '../features/user/userSlice.ts';
// const logger = reduxLogger.createLogger();
export const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer

  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
