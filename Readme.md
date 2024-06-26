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
