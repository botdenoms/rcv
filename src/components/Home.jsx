import { useState, useEffect } from 'react'
import ElectionCard from './ElectionCard'

export default function Home({callback, data=[]}) {

    useEffect(() => {
        listFilter(0)
    }, [])

    const [tab, setTab] = useState(0)
    const [scope, SetScope] = useState([])

    const listFilter = (index)=>{
        const today = new Date(Date.now())
        const date = today.getDate()
        const month = today.getMonth() + 1
        const year = today.getFullYear()
        switch (index) {
            case 0:
                const live = liveList(date, month, year)
                SetScope([...live])
                break
            case 1:
                const up = upComing(date, month, year)
                SetScope([...up])
                break
            default:
                const prev = previous(date, month, year)
                SetScope([...prev])
                break
        }
        setTab(index)
    }

    const liveList = (d, m, y) =>{
        var tmp = []
        data.map((v)=>{
            const dt = v.date.split("-")
            if(Number(dt[0]) === d && Number(dt[1]) === m && Number(dt[2]) === y){
                tmp.push(v)
            }
        })
        return tmp
    }

    const upComing = (d, m, y) =>{
        var tmp = []
        data.map((v)=>{
            const dt = v.date.split("-")
            if (Number(dt[2]) > y ) {
                // > year we push
                tmp.push(v)
            }
            if (Number(dt[2]) === y ) {
                if(Number(dt[1]) > m){
                    // equal y but > month we push
                    tmp.push(v)
                }else{
                    if(Number(dt[0]) > d && Number(dt[1]) === m){
                        // equal y and m but > date we push
                        tmp.push(v)
                    }
                }
            }
        })
        return tmp
    }

    const previous = (d, m, y) =>{
        var tmp = []
        data.map((v)=>{
            const dt = v.date.split("-")
            if (Number(dt[2]) < y ) {
                // < year we push
                tmp.push(v)
            }
            if (Number(dt[2]) === y ) {
                if(Number(dt[1]) < m){
                    // equal y but < month we push
                    tmp.push(v)
                }else{
                    if(Number(dt[0]) < d && Number(dt[1]) === m){
                        // equal y and m but < date we push
                        tmp.push(v)
                    }
                }
            }
        })
        return tmp
    }

    return (
        <div className="home">
            <div className="tabs">
                <div className={tab === 0?"tab active":"tab"} onClick={()=>listFilter(0)}>
                    Live
                </div>
                <div className={tab === 1?"tab active":"tab"} onClick={()=>listFilter(1)}>
                    Upcoming
                </div>
                <div className={tab === 2?"tab active":"tab"} onClick={()=>listFilter(2)}>
                    Previous
                </div>
            </div>
            <div className="content">
                { scope.length === 0 && <div className='list-empty'> No data at the moment</div>}
                {
                    scope.length !== 0 && scope.map((v,i)=> <ElectionCard callback={callback} key={i} tab={tab} data={v}/>)
                }
            </div>
        </div>
    )
}
