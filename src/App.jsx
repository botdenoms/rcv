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
  const [election, setElection] = useState({})
  const [loading, setLoading] = useState(true)

  const loadData = async()=>{
    const resp = await fetch("/elections.json")
    const data = await resp.json()
    setElections([...data])
    setLoading(false)
    console.log(data)
  }

  const newElection = ()=>{
    // alert('new election')
    setTab(1)
  }

  const close = ()=>{
    setTab(0)
  }

  const cardView = (index, elec={})=>{
    // to results or vote page
    setElection(elec)
    if (index === 0) {
      setTab(2)
    }else if(index === 1){
      setTab(2)
    }else{
      setTab(3)
    }
  }

  return (
    <div className="App">
      <AppBar home={close}/>
      { loading && <div className='list-empty'>loading...</div> }
      { tab === 0 && !loading && <Home callback={cardView} data={elections}/>}
      {
        tab === 1 && !loading && <CreateForm close={close}/>
      }
      {
        tab === 2 && !loading && <Vote election={election} close={close}/>
      }
      {
        tab > 2 && !loading && <Results election={election} close={close}/>
      }
      {
        tab !== 1 && tab !== 2 && <Create callback={newElection}/>
      }
    </div>
  )
}

export default App
