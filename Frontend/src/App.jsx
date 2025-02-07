import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HR from './pages/Hr'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-6">
     
      <HR />
  </div>
  )
}

export default App
