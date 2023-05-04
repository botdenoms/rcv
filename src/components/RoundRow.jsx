import {useRef, useEffect, useState} from 'react'
import reactLogo from '../assets/react.svg'

export const RoundRow = ({data, winner=false, min=false, index}) => {

    const brs = useRef(null)
    const vots = useRef(null)
    const pers = useRef(null)
    const [gains, setGains] = useState(false);

    useEffect(() => {
        if(data.gains !== 0){
            setGains(true)
        }else{
            setGains(false)
        }
        clearFields()
        setTimeout(() => {
            loadBar()
        }, 200)
    }, [index])

    const clearFields = ()=>{
        if(brs.current === null){
            return
        }
        brs.current.style.width = `0`
        brs.current.classList.remove("brs-win")
        brs.current.classList.remove("brs-none")
        brs.current.classList.remove("brs-min")
        // vots.current.innerHTML = `0`
        // pers.current.innerHTML = `0%`
    }

    const loadBar = () => {
        var clr = "brs-none"
        if(min){
            clr = "brs-min"
        }
        if(winner){
            clr = "brs-win"
        }
        vots.current.innerHTML = `${data.votes}`
        pers.current.innerHTML = `${data.percent}%`
        brs.current.style.width = `${data.percent}%`
        brs.current.classList.add(clr)
    }
    

    return (
        <div className="content-box" >
            <div className='info-content'>
                <div className="candidate">
                    <img src={reactLogo} alt="alt" className='profile' />
                    <div>
                        <span className='bg-name' >{data.name}</span>
                        <div className='more'>
                            <span className='sm-name'>{data.party}</span>
                            <img src={reactLogo} alt="alt" className='party-pic' />
                        </div>
                    </div>
                </div>
                <div className="outcomes">
                    <div className="details">
                        {min && <span className='notice'>Elliminated</span>}
                        {winner && <span className='notice-win'>Winner</span>}
                    </div>
                    <div className="more">
                        {gains  && <span className='gains'>+{data.gains}</span>}
                        <span className='gr-text' ref={vots}>0</span>
                        <span className='per-text' ref={pers}>0%</span>
                    </div>
                </div>
            </div>
            <div className="bars" ref={brs} ></div>
        </div>
    )
}
