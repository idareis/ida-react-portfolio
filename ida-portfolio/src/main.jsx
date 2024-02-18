import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HeroSection from "./HeroSection.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export default function Home() {
  return(
      <>
          <HeroSection />
      </>
  )
}