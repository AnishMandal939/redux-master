const store = require('./app/store.js');

const cakeActions = require('./features/cake/cakeSlice.js').cakeActions;
const iceCreamActions = require('./features/icecream/iceCreamSlice.js').iceCreamActions;

console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

console.log('------- ice cream actions ------');
store.dispatch(iceCreamActions.orderedIceCream());
store.dispatch(iceCreamActions.orderedIceCream());
store.dispatch(iceCreamActions.orderedIceCream())
store.dispatch(iceCreamActions.restockedIceCream(3));

unsubscribe()
