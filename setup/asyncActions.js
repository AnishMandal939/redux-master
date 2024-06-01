// state, action, and reducer
const redux = require('redux');
const createStore = redux.createStore;

const asyncInitialState = {
  loading: false,
  users: [],
  error: '',
}

// actions ----
// creating constants:


const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';


// action craetors
const fetchUsersRequest = () => {
  return{
    type: FETCH_USERS_REQUESTED,
  }
}

const fetUsersSuccess = (users) => {
  return{
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  }
}

const fetchUsersFailure = (error) => {
    return{
      type: FETCH_USERS_FAILED,
      payload: error,
  }
};

// reducer function 
const reducer = (state: asyncInitialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
    
      return{
        ...state,
        loading: true,
      }
    case FETCH_USERS_SUCCEEDED:
      return{
        loading: false,
        users: action.payload,
        error: '',
      }

    case FETCH_USERS_FAILED:
      return{
        loading: false,
        users: [],
        error: action.payload,
      }
    default:
      break;
  }
}

// step 4 - final to create redux store
//
const store = createStore(reducer)

// api call :
