import { useState } from 'react'
import Main from './layouts/Main'
import Index from './pages/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Main>
      <Index />
    </Main>
  )
}

export default App
