import React from 'react'

import reactLogo from '../assets/react.svg'

export default function CandidateCard({remove, view=false, data={}}) {
  return (
    <div className='cand-card'>
      {
        !view &&
        <div className="close cc-card" onClick={()=>remove()}>
         x
        </div>
      }
      <div className='img-box'>
        <img src={reactLogo} className='cand-pic' alt="candidate" />
      </div>
      <div className="cand-info">
        <span>{data.name}</span>
        <div className="more">
          {data.party === "" && "No party"}
          {data.party !== "" && <img src={reactLogo} className='party-pic' alt="candidate" />}
          {data.party !== "" && <span>{data.party}</span>}
        </div>
      </div>
    </div>
  )
}
