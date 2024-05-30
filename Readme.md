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

