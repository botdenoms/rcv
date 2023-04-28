import reactLogo from '../assets/react.svg'

export default function ElectionCard({callback, tab, data}) {
  return (
    <div className="card" onClick={()=>callback(tab, data)}>
      <img alt="text" src={reactLogo}/>
      <div className="textbox">
      <span className='span-title'>{data.title}</span>
      <p>
        {
          data.description
        } 
      </p>
      <span className='span-date'>{data.date}</span>
      </div>
    </div>
  )
}
