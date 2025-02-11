import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="bg-blue-500 dark:bg-blue-900 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-lg md:text-2xl font-semibold">Henry's News and Weather Visualitations!</h1>
        </div>
      </header>
    </>
  )
}

export default App
