import { useState } from 'react'
import ElectionCard from './ElectionCard'

export default function Home({callback, data}) {

    const [tab, setTab] = useState(0);

    return (
        <div className="home">
            <div className="tabs">
                <div className={tab === 0?"tab active":"tab"} onClick={()=>setTab(0)}>
                    Live
                </div>
                <div className={tab === 1?"tab active":"tab"} onClick={()=>setTab(1)}>
                    Upcoming
                </div>
                <div className={tab === 2?"tab active":"tab"} onClick={()=>setTab(2)}>
                    Previous
                </div>
            </div>
            <div className="content">
                {
                    data.map((v,i)=> <ElectionCard callback={callback} key={i}/>)
                }
            </div>
        </div>
    )
}
