import { useState } from 'react'
import './App.css'
import AppBar from './components/AppBar'
import Create from './components/Create'
import Home from './components/Home'
import Vote from './components/Vote'
import Results from './components/Results'
import CreateForm from './components/CreateForm'

function App() {
  const [tab, setTab] = useState(0)

  const tabChange = ()=>{
    setTab(tab + 1)
  }

  return (
    <div className="App">
      <AppBar/>
      {
      tab === 0?<Home/>: 
      tab === 1? <CreateForm/>
      :tab === 2?<Vote/>
      :<Results/>}
      <Create/>
    </div>
  )
}

export default App
