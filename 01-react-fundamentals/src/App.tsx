import './App.css'

const allItems = [
  { id: 'apple', value: 'apple' },
  { id: 'orange', value: 'orange' },
  { id: 'grape', value: 'grape' },
  { id: 'pear', value: 'pear' },
]

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <h2>intro to rendering arrays</h2>
      <ul>
        {allItems.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  )
}

export default App
