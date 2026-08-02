import { StrictMode } from 'react'
//This imports the API responsible for rendering your React application into the browser.
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// (!). This is the non-null assertion operator in TypeScript.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
