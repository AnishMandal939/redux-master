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


