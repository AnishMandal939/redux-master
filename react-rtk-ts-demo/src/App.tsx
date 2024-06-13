import { useState } from 'react'
import {CakeView} from './features/cake/CakeView.tsx';
import {IceCreamView} from './features/icecream/IceCreamView.tsx';
import {UserView} from './features/user/UserView.tsx';
const App = () =>{
  return (
    <>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  )
}

export default App
