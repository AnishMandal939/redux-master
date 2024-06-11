import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {UserView} from './features/user/UserView.jsx';
import {CakeView} from './features/cake/CakeView.jsx';
import {IceCreamView} from './features/icecream/IceCreamView.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  )
}

export default App
