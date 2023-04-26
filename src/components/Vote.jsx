import {useState} from 'react'
import CandidateCard from './CandidateCard'
import ChoiceCard from './ChoiceCard'

export default function Vote() {

  const [candidates, setCandidates] = useState([2,5,7])
  const [view, setView] = useState(true)
  const toggle = ()=>{
    setView(!view)
  }

  const guider = ()=>{
    // guide choice picking
    alert("guiding")
  }

  return (
    <div className="vote">
      <div className="info">
        <span>Election title</span>
        <span className="notice">duration end</span>
      </div>
      <div className="view-more">
        <span className='toggle' onClick={()=>toggle(0)}>Candidates</span>
        <div className="view-list">
          {
            view && candidates.map((v, i)=> <CandidateCard key={i} view={true}/>)
          }
        </div>
      </div>
      <div className="voting">
        Your Choices
        <ChoiceCard choice={1} list={candidates}/>
      </div>
      <button onClick={()=>guider()}>Next</button>
    </div>
  )
}
