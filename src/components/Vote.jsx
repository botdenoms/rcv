import {useState, useRef} from 'react'
import CandidateCard from './CandidateCard'
import ChoiceCard from './ChoiceCard'

export default function Vote() {

  const drp = useRef(null)
  const [candidates, setCandidates] = useState([2,5,7])
  const [view, setView] = useState(true)
  const toggle = ()=>{
    if(view){
      drp.current.style.transform = `rotateZ(0deg)`
    }else{
      drp.current.style.transform = `rotateZ(180deg)`
    }
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
        <span className='toggle' onClick={()=>toggle()}>
          Candidates
          <div className="drop-down down" ref={drp}></div> 
        </span>
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
