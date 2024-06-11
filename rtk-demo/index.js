const store = require('./app/store.js');

const cakeActions = require('./features/cake/cakeSlice.js').cakeActions;
const iceCreamActions = require('./features/icecream/iceCreamSlice.js').iceCreamActions;


// async thunk
const fetchUsers = require('./features/user/userSlice.js').fetchUsers

console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() =>
// {} - this for logger
  console.log(store.getState())
  );
/*store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));
*/
/*
console.log('------- ice cream actions ------');
store.dispatch(iceCreamActions.orderedIceCream());
store.dispatch(iceCreamActions.orderedIceCream());
store.dispatch(iceCreamActions.orderedIceCream())
store.dispatch(iceCreamActions.restockedIceCream(3));
*/

store.dispatch(fetchUsers());
//unsubscribe()
