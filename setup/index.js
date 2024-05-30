//console.log("From index.js")
const redux = require('redux');

const createStore = redux.createStore;


const CAKE_ORDERED = 'CAKE_ORDERED';

function orderCake(){
  return {
    type: CAKE_ORDERED,
    quantity: 1
  }
}
//(previousState, action) => newState
//

const initialState = {
  numOfCakes: 10,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CAKE_ORDERED:
        return {
          ...state, // first create a copy of state object and modify what you need to modigy
          numOfCakes: state.numOfCakes - 1
        }

      default:
        return state;
    }
  }


  const store = createStore(reducer)

//expose method
console.log('initial state', store.getState())

// 3rd resp
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));

//4th resp  dispatch
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()


