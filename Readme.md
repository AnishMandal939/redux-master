## Redux store
One store for the entire application
- Responsibilities:
  - Holds application state
  - Allows access to state via getState()
  - Allows state to be updated via dispatch(action)
  - Registers listeners via subscribe(listener)
  - Handles unregistering of listeners via the function returned by subscribe(listener)

  ## since this is not a react application 
    - inorder to import library we have to use `require() - method` but we can also use `import` by just adding `type: module` in package.json


## to manage nestedState - 
  - we'll be making use of Immer package :
    - npm i immer


## Middleware
  - Is the suggest way to extend Redux with custom functionality.
  - provides a third party extension point between dispatching an actoin, and the moment it reaches the reducer.
  - Use middleware for logging, crash reporting, performing asynchronous tasks etc.

    - for logging we'll be using library called redux-logger
      `npm i redux-logger`


### Async Actions
  - Synchronous Actions:
      - As soon as an action was dispatched, the state was immediately updated.
      - If you dispatch the CAKE_ORDERED action, the numOfCakes was right away decremented by 1.
      - Same with ICECREAM_ORDERED action as well.

  - Async Actions:
    - Asynchronous API calls to fetch data from an end point and use that data in your application.

#### ----- Our Application -----
  - Fetches a list of users from an API end point and stores it in the redux store.
  State ? - What states gonna look like
  Actions ? - what are the different actions.
  Reducer ? how reducer is going to work.

  State:
```
     state{
        loading: true,
        data: [], // list of users
        error: ''
      }
```
  loading: Display a loading spinner in your component
  data: list of users
  error: Display error to the users

  Actions:
    FETCH_USERS_REQUESTED - fetch list of users
    FETCH_USERS_SUCCEEDED - fetched successfully
    FETCH_USERS_FAILED    - error when fetching the data

  Reducers:
    case: FETCH_USERS_REQUESTED
      loading: true
    case: FETCH_USERS_SUCCEEDED
        loading: false
        users: data(from api)
    case: FETCH_USERS_FAILED
        loading: false
        error: error (from api)

- - Creating AsyncActions.js  - for async action
  - packages we need to install to work with api call 
    1. axios - npm install axios
    2. redux-thunk - npm install redux-thunk
        - redux-thunk : define  async action creators
        - it is middleware



### ----- Transition to Redusjs-toolkit ------

  - Redux Concerns:
    - Redux requires too much of boilerplate code
      - Action
      - Action object
      - Action creators
      - Switch statement in reducer

    A lot of other packages have to be installed to work with redux
      - Redux-thunk : for async actions
      - Immer : for handling nested state object
      - Redux-devtools : help to debug redux applications

    To improve this much of hustles redux-toolkit were introduced

#####   redux-toolkit
  - Redux toolkit is the oficial, opiniated, batteries-included toolset for efficient Redux development
    - Abstract over the setup process
    - Handle the most common use cases
    - Include some useful utilities

    == building same application using redux-toolkit

###### setups redux toolkit
  - rtk-demo : is the folder where we'll be making stuffs using redux-toolkit

  - initialize package.json with default settings: `npm init --y`
  - for reduxjs toolkit : `npm i @reduxjs/toolkit`

 pattern of redux-toolkit
  - create a feature slice using a createSlice function which generates ``actions`` and  ``reducers`` automatically
  - perform direct mutations on the state : and that is being ok with immer is being used under the hood
  - create a store using the configureStore function and attach the reducer
  - dispatch action on the store using store.dispatch
  - inspect the state using the store.getState()
  - and listen the changes using the store.subscribe()


#### redux logger
  - npm i redux-logger

Instead of maintaining logs in console.log(), making use of redux logger helps to visualize the logs in better way.

setups:
  - redux-logger should be passed as middleware, take a look over store.js where i first imported logger from redux logger and then extracted object from reduxLogger -  reduxlogger.createLogger() 
  finally attached the logger as middleware in reducer 
  lastly: used logger in index.js where we subscribe the initialstate

#### Extra reducer:
Basic methodology of working with extra reducer is to make use of action types to trigger on any other reducers:
  here in this case of redux - we made use of CAKE_ORDERED action in icecreamreducer and whenever we call cakeorderedreducer it deducts the icecream basis of action types CAKE_ORDERED acc to logic , so in reduxjs-toolkit it does not happen , if we need similar functionalities then we need to make use of extra reducer
To overview concepts : take a look in setup/iceCreamReducer.js 
  - CAKE_ORDERED

- working with reduxjs-toolkit: 
  - syntax is as follows:
  icecreamslice.js
    extraReducers: (builder) => {
      builder.addCase('cake/ordered', (state) => {
      state.numOfIceCreams--
  })
  }

 // or 
make sure to import cakeactions from cakeSlice

const {cakeActions} = require('../cake/cakeSlice.js')
 extraReducers: (builder) => {
      builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--
  })
  }

#### Working with asynchronous action : async thunk
 - start with redux way:
    - initially we use to make a flag 'loading' state to load data if loading = true;
    and on the basis of flag status we dispatch actions and show what result needs to be shown , now to achieve this functionality in reduxjs-toolkit 
    --- we will be working with new folder : user/userSlice.js

    createAsynthnk function - create 
    it accepts :
      action.types as its 1st argument
      and a callback function as a 2nd argument
      callback function contains async logic and return a promise
      createAsyncthunk will dispatch the promise lifecycle actions that we can listen using extraReducers
        - the lifecycle includes, 
          - pending : for when the request is made
          - fulfilled : for when the request is succeded
          - rejected : for when the request is failed
eport reducer a default export and fetchUsers function as a named exoport

- in store.js - make sure to attach the reducer to the store
- in index.js - dispatch the async action


redux-thunk is applied as a middleware to the store under the hood

---- This is pretty much it to work with Async request with reduxjs-toolkit



if you want to know how reduxjs/toolkit working under the hood 
- look inside: node_modules/immer and node_modules/redux-thunk


#### That's it for concept of redux, reduxjs-toolkit
  - now you are ready to work with ui library like : ReactJs
