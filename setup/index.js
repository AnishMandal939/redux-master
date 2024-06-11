//console.log("From index.js")
const redux = require('redux');

const createStore = redux.createStore;

// create action binders
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

// apply middleware ;import {  } from "";
const applyMiddleware = redux.applyMiddleware;

// require redux logger : package
 const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function orderCake(){
  return {
    type: CAKE_ORDERED,
    payload: 1
  }
}

function reStockCake(qty=1){
  return{
    type: CAKE_RESTOCKED,
    payload: qty
  }
}

function orderIceCream(qty =1) {
  return{
    type: ICECREAM_ORDERED,
    payload: qty
  } 
}

function restockIceCream(qty=1) {
  return{
    type: ICECREAM_RESTOCKED,
    payload: qty
  }
}
//(previousState, action) => newState
//
/*
const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20
}
*/

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
      case CAKE_ORDERED:
        return {
          ...state, // first create a copy of state object and modify what you need to modigy
          numOfCakes: state.numOfCakes - 1
        }
      case CAKE_RESTOCKED:
        return{
          ...state,
          numOfCakes: state.numOfCakes + action.payload
      }
      default:
        return state;
    }
  }

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return{
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      }
    case ICECREAM_RESTOCKED:
         return{
          ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload
      }
    case CAKE_ORDERED:
        return{
          ...state,
          numOfIceCreams: state.numOfIceCreams - 1
      }
    default:
      return state;
  }
}

// combine reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})
  const store = createStore(rootReducer, applyMiddleware(logger))

//expose method
console.log('initial state', store.getState())

// 3rd resp
const unsubscribe = store.subscribe(() =>
 // console.log('updated state', store.getState())
  // instead of console log , logger is used to log the states, `{}`
{}
);

//4th resp  dispatch
//store.dispatch(orderCake())
//store.dispatch(orderCake())
//store.dispatch(orderCake())

// restock 
//store.dispatch(reStockCake(3))
//
//for bind action bindActionCreators

const actions = bindActionCreators({orderCake, reStockCake, orderIceCream, restockIceCream}, store.dispatch);

// call actions - how many times you want
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.reStockCake(3)

console.log('--- for ice creams ---');
actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(3)
unsubscribe()


