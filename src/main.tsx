import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { Toaster } from './Components/ui/sonner.tsx';
import { ContextProvider } from './Context/ContextApi.tsx';

export const baseUrl = "http://localhost:8080";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>,
)
