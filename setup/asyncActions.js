// state, action, and reducer
const redux = require('redux');
const {thunk} = require('redux-thunk')
const axios = require('axios')
const createStore = redux.createStore;
//middleware 
const applyMiddleware = redux.applyMiddleware

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

const fetchUsersSuccess = (users) => {
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
const reducer = (state= asyncInitialState, action) => {
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
  }
}

// step 4 - final to create redux store
//
//
//define async middleware
const fetchUsers = () => {
  return function(dispatch){
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
              // response.data is the users
             const users = response.data.map((user) => user.id)
              dispatch(fetchUsersSuccess(users))
      }).catch((error) => {
        dispatch(fetchUsersFailure(error.message))
        // error.message is the error message
      })
  }
}
const store = createStore(reducer, applyMiddleware(thunk))

// api call :
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())