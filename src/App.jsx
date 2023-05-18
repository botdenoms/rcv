import { useState, useEffect } from 'react'
import './App.css'
import AppBar from './components/AppBar'
import Create from './components/Create'
import Home from './components/Home'
import Vote from './components/Vote'
import Results from './components/Results'
import CreateForm from './components/CreateForm'
import { ResultsGen } from './components/ResultsGen'

function App() {

  useEffect(() => {
    loadData()
  }, [])

  const [tab, setTab] = useState(0)
  const [elections, setElections] = useState([])
  const [election, setElection] = useState({})
  const [loading, setLoading] = useState(true)
  const [live, setLive] = useState(false)
  const [result, setResult] = useState(false)

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
      setLive(true)
      setTab(2)
    }else if(index === 1){
      setLive(false)
      setTab(2)
    }else{
      // check if results present
      // true goes to results
      // false to generate
      if (result) {
        setTab(3)
        return
      }
      setTab(-1)
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
        tab === 2 && !loading && <Vote election={election} close={close} live={live}/>
      }
      {
        tab > 2 && !loading && <Results election={election} close={close}/>
      }
      {
        tab !== 1 && tab !== 2 && <Create callback={newElection}/>
      }
      {
        tab === -1 && !loading && <ResultsGen election={election} close={close} />
      }
    </div>
  )
}

export default App
