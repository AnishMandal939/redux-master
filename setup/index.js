//console.log("From index.js")
const redux = require('redux');

const createStore = redux.createStore;

// create action binders
const bindActionCreators = redux.bindActionCreators;


const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

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
      case CAKE_RESTOCKED:
        return{
          ...state,
          numOfCakes: state.numOfCakes + action.payload
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
//store.dispatch(orderCake())
//store.dispatch(orderCake())
//store.dispatch(orderCake())

// restock 
//store.dispatch(reStockCake(3))
//
//for bind action bindActionCreators

const actions = bindActionCreators({orderCake, reStockCake}, store.dispatch);

// call actions - how many times you want
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.reStockCake(3)
unsubscribe()


