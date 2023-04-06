import { useState } from 'react'
import './App.css'
import data from './data'
import List from './List'

function App() {
  const [person, setPerson] = useState(data)

  return (
    <main>
    <div className="App">
      <h1>{person.length} Birthdays Today</h1>
      <section>
        <List people={person}/>
        <button type="button" onClick={()=>setPerson([])}>Clear All</button>
      </section>
    </div>
    </main>
  )
}

export default App
