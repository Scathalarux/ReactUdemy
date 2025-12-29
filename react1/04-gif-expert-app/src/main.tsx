import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ImagesApp } from './ImagesApp'
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ImagesApp />
  </StrictMode>,
)
