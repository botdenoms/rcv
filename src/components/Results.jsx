import reactLogo from '../assets/react.svg'
import {useState, useRef, useEffect} from 'react'
import CandidateCard from './CandidateCard'
import { RoundCard } from './RoundCard'

export default function Results({election, close}) {
  const cands = useRef(null)
  const rounds = useRef(null)
  const [candidates, setCandidates] = useState(election.candidates)
  const [viewC, setViewC] = useState(true)
  const [viewR, setViewR] = useState(true)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  useEffect(() => {
    loadResults()
  }, []);

  const loadResults = async() =>{
    // get election results
    setLoading(true)
    const resp = await fetch("/results.json")
    const data = await resp.json()
    setData({...data})
    setLoading(false)
  }

  const toggleC = ()=>{
    if(viewC){
      cands.current.style.transform = `rotateZ(0deg)`
    }else{
      cands.current.style.transform = `rotateZ(180deg)`
    }
    setViewC(!viewC)
  }

  const toggleR = ()=>{
    if(viewR){
      rounds.current.style.transform = `rotateZ(0deg)`
    }else{
      rounds.current.style.transform = `rotateZ(180deg)`
    }
    setViewR(!viewR)
  }

  return (
    <div className="results">
      <div className="end">
        <div className="close" onClick={()=>close()}>
          x
        </div>
      </div>
      <div className="info">
        <span>{election.title}</span>
        <span className="notice">On: {election.date}</span>
      </div>
      <div className="info">
        <span className="notice-win">winner</span>
        <div className="row-div">
          <img src={reactLogo} alt="alt" className='profile'/>
          {!loading && <span>{data.winner.name}</span>}
        </div>
        <div className="row-div-center">
          {!loading && <span>{data.winner.party}</span>}
          <img src={reactLogo} alt="alt" className='party-pic'/>
        </div>
      </div>
      <div className="view-more">
        <span className='toggle' onClick={()=>toggleC()}>
          Candidates
          <div className="drop-down down" ref={cands}></div> 
        </span>
        <div className="view-list">
          {
            viewC && candidates.map((v, i)=> <CandidateCard key={i} view={true} data={v}/>)
          }
        </div>
      </div>
      <div className="view-more">
        <span className='toggle' onClick={()=>toggleR()}>
          Rounds
          <div className="drop-down down" ref={rounds}></div> 
        </span>
        {viewR && !loading && <RoundCard data={data.round}/>}
      </div>
    </div>
  )
}