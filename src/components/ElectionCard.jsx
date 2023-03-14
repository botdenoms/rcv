import reactLogo from '../assets/react.svg'
export default function ElectionCard() {
  return (
    <div className="card">
      <img alt="text" src={reactLogo}/>
      <div className="textbox">
      <span>name/title</span>
      <p>
        description text about the election hold
        by the card. 
      </p>
      <span>DateTime on elec</span>
      </div>
    </div>
  )
}
