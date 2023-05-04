import {useState} from 'react'
import { RoundRow } from './RoundRow'

export const RoundCard = ({data=[]}) => {

  const [index, setIndex] = useState(0)

  const next = () =>{
    // next round
    if (index + 1 >= data.length) {
      return
    }
    setIndex(index + 1)
  }
  const prev = () =>{
    // previous round
    if (index  <= 0) {
      return
    }
    setIndex(index - 1)
  }

  return (
    <div className='round'>
      <div className="round-title">
        <span>Round {data[index].round}</span>
        <div >
          <span className='rounds-nav' onClick={()=>prev()}>Prev</span>
          <span className='rounds-nav' onClick={()=>next()}>Next</span>
        </div>
      </div>
      {
        data[index].candidates.sort((a, b)=> b.votes - a.votes).map((v,i)=> <RoundRow data={v} key={i} min={v.eliminated} winner={v.winner} index={index}/>)
      }
    </div>
  )
}
