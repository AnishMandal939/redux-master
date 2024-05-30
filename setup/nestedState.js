
const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
  name: 'Anish',
  address: {
    street: '123 Main St',
    city: 'KTM',
    state: 'Provience 3'
  }
}

// update user address - with redux pattern
// step 1 : define constant for action

const STREET_UPDATED = 'STREET_UPDATED';
//
// step2 : define action creator
const updateStreet = (street) => {
  return{
    type: STREET_UPDATED,
    payload: street,
  }
}

// step 3: create reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return{
        ...state,
        address: {
          ...state.address, // for city and state unaffected , making copy of org value
          street: action.payload,
        }
      }
    default:
      return state;
  }
}

// step 4 - create store and dispatch action
const store = createStore(reducer);

console.log('Initial state ', store.getState());

// create a subscribe : step 5
const unsubscribe = store.subscribe(() =>  {
  console.log('Updated state', store.getState())
})

store.dispatch(updateStreet('456 Main St'))
unsubscribe();
