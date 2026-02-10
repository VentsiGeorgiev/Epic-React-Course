// Associate with Calculator component

import './App.css'
import Calculator from './components/Calculator'

function App() {
  return (
    <>
      <Calculator left={2} />
      <Calculator left={2} operator='+' right={1} />
      <Calculator left={3} operator='*' right={3} />
      <Calculator left={8} operator='/' right={2} />
      <Calculator left={4} operator='**' right={2} />
      <Calculator left={10} operator='%' right={3} />
    </>
  )
}

export default App
