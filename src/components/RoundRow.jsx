import {useRef, useEffect} from 'react'
import reactLogo from '../assets/react.svg'

export const RoundRow = ({data, winner=false, min=false}) => {

    const brs = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            loadBar()
        }, 1000)
    }, [])

    const loadBar = () => {
        brs.current.style.width = `${data.percent}%`
        const clr = min? "brs-min": winner?"brs-win":"brs-none"
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
                        <span className='gr-text'>{data.votes}</span>
                        <span className='per-text'>{data.percent}%</span>
                    </div>
                </div>
            </div>
            <div className="bars" ref={brs} ></div>
        </div>
    )
}
