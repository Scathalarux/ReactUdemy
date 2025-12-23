import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelloWorldApp } from './components/HelloWorldApp'
import { FirstApp } from './components/FirstApp'
import "./index.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelloWorldApp />
    <FirstApp name={'Lara'}/>
    <FirstApp />
  </StrictMode>,
)
