import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './components/Greetings.jsx'
import ItemList from './components/ItemList.jsx'
import Timer from './components/Timer.jsx'
import ToggleMessage from './components/ToggleMessage.jsx'
import UserProfile from './components/UserProfile.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
