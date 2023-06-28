import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Index from './pages/Index'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen bg-[url('/background.png')] bg-contain bg-no-repeat">
      <NavBar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
