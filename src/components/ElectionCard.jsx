import reactLogo from '../assets/react.svg'

export default function ElectionCard({callback, tab}) {
  return (
    <div className="card" onClick={()=>callback(tab)}>
      <img alt="text" src={reactLogo}/>
      <div className="textbox">
      <span className='span-title'>name/title</span>
      <p>
        description text about the election hold
        by the card. 
      </p>
      <span className='span-date'>DateTime on elec</span>
      </div>
    </div>
  )
}
