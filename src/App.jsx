import { useState, useEffect } from 'react'
import './App.css'
import AppBar from './components/AppBar'
import Create from './components/Create'
import Home from './components/Home'
import Vote from './components/Vote'
import Results from './components/Results'
import CreateForm from './components/CreateForm'

function App() {

  useEffect(() => {
    loadData()
  }, [])

  const [tab, setTab] = useState(0)
  const [elections, setElections] = useState([])

  const loadData = async()=>{
    const resp = await fetch("/elections.json")
    const data = await resp.json()
    setElections([...data])
    // console.log(await resp.json())
  }

  const newElection = ()=>{
    // alert('new election')
    setTab(1)
  }

  const close = ()=>{
    setTab(0)
  }

  const cardView = (index)=>{
    // to results or vote page
    if (index === 0) {
      setTab(2)
    }else if(index === 1){
      setTab(2)
    }else{
      setTab(3)
    }
    // alert('card clicked, vote of view results')
  }

  return (
    <div className="App">
      <AppBar home={close}/>
      {
      tab === 0?<Home callback={cardView} data={elections}/>: 
      tab === 1? <CreateForm close={close}/>
      :tab === 2?<Vote/>
      :<Results/>}
      {
        tab !== 1 && tab !== 2 && <Create callback={newElection}/>
      }
      
    </div>
  )
}

export default App
