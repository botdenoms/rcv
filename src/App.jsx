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

  const newElection = ()=>{
    // alert('new election')
    setTab(1)
  }

  const close = ()=>{
    setTab(0)
  }

  const cardView = ()=>{
    alert('card clicked, vote of view results')
  }

  return (
    <div className="App">
      <AppBar/>
      {
      tab === 0?<Home callback={cardView} data={[1,2,3,4,5,7,5,4]}/>: 
      tab === 1? <CreateForm close={close}/>
      :tab === 2?<Vote/>
      :<Results/>}
      {
        tab !== 1? <Create callback={newElection}/>:<></>
      }
      
    </div>
  )
}

export default App
