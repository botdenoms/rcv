import {useState, useRef} from 'react'
import CandidateCard from './CandidateCard'
import ChoiceCard from './ChoiceCard'

export default function Vote({election, close, live=false}) {

  const drp = useRef(null)
  const [candidates, setCandidates] = useState([...election.candidates])
  const [view, setView] = useState(true)
  const [choiceIdx, setChoiceIdx] = useState(0)
  const [preview, setPreview] = useState(false)
  const [yourList, setYourList] = useState([])

  const toggle = ()=>{
    if(view){
      drp.current.style.transform = `rotateZ(0deg)`
    }else{
      drp.current.style.transform = `rotateZ(180deg)`
    }
    setView(!view)
  }

  const guider = (current, index)=>{
    var temp = []
    if (preview) {
      return
    }
    candidates.forEach((v,i)=>{
      if(i !== index){
        temp.push(v)
      }else{
        yourList.push(v)
      }
    })
    if(candidates.length === 1){
      setPreview(true)
      return
    }
    setChoiceIdx(current + 1)
    setCandidates([...temp])
  }

  const castVote = () =>{
    // send votes to db
    alert('Congradulations')
  }

  return (
    <div className="vote">
      <div className="end">
        <div className="close" onClick={()=>close()}>
          x
        </div>
      </div>
      <div className="info">
        <span>{election.title}</span>
        <span className="notice">
          {live && `Ends on: ${election.duration}`}
          {!live && `Start at: ${election.duration}`}
        </span>
      </div>
      {
        !live && 
        <div className="info">
          <span className='desc'>
            {election.description}
          </span>
        </div>
      }
      <div className="view-more">
        <span className='toggle' onClick={()=>toggle()}>
          Candidates
          <div className="drop-down down" ref={drp}></div> 
        </span>
        <div className="view-list">
          {
            view && election.candidates.map((v, i)=> <CandidateCard key={i} view={true} data={v}/>)
          }
        </div>
      </div>
      {
        live && 
        <div className="voting">
          Candidate Options
          <ChoiceCard choice={choiceIdx} list={candidates} guide={guider}/>
        </div>
      }
      {preview && <span className="voting">Your Choices</span>}
      <div className="view-list">
        {
          preview && yourList.map((v, i)=> <CandidateCard key={i} view={true} data={v}/>)
        }
      </div>
      <div className="view-list">
        {
          preview && 
          yourList.map((v, i)=> {
           return (
            <span className='highlights' key={i}>
              <div className="cirl">{i+1}</div>
            </span>)
          })
        }
      </div>
      {
        preview && 
        <button className='guide' onClick={()=>castVote()}>Cast Vote</button>
      }
    </div>
  )
}
