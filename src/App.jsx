import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greetings'
import UserProfile from './components/UserProfile'
import ToggleMessage from './components/ToggleMessage'
import ItemList from './components/ItemList'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Greeting
     name={"Tolga"}
     age={19}
     />
      <div className="card text-emerald-700 bg-teal-50 rounded-4xl">
        <button className="hover:text-amber-300" onClick={() => setCount((count) => count + 1)}>
         Current count is {count}
        </button>
      </div>
      <UserProfile />
      <ToggleMessage />
      <ItemList items={["Buy TolbCoin","Trade your tokens","Exchange your currency"]} />
      <Timer />
    </>
  );
};

export default App
