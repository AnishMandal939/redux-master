import {CAKE_ORDERED}  from '../Constants.js';

function orderCake(){
  {
    type: CAKE_ORDERED,
    quantity: 1
  }
}


//(previousState, action) => newState
//

const initialState = {
  numOfCakes = 10,
  anotherProperty: 0,
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
        break;
    }
  }
