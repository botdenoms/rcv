import React from 'react'

import reactLogo from '../assets/react.svg'

export default function CandidateCard() {
  return (
    <div className='cand-card'>
      <div className="close cc-card" onClick={()=>alert('remove candidate')}>
        x
      </div>
      <div className='img-box'>
        <img src={reactLogo} className='cand-pic' alt="candidate" />
      </div>
      <div className="cand-info">
        <span>candidate name</span>
        <div className="more">
          <img src={reactLogo} className='party-pic' alt="candidate" />
          <span>party name</span>
        </div>
      </div>
    </div>
  )
}
