import {useRef, useState} from 'react'

import reactLogo from '../assets/react.svg'

export default function ChoiceCard({choice, list=[]}) {
    const drp = useRef(null)
    const [picked, setPicked] = useState(false)
    const [choiceIdx, setChoiceIdx] = useState(0)
    const choicePos = (pos)=>{
        switch (pos) {
            case 1:
                return '1 st'
            case 2:
                return '2 nd'
            case 3:
                return '3 rd'
            default:
                return `${pos} th`
        }
    }

    const selectChoices = ()=>{
        //open options
        drp.current.style.display = 'block'
    }

    const selectPick = (index)=>{
        drp.current.style.display = 'none'
        setChoiceIdx(index)
        setPicked(true)
        // make picked the current item
    }

    return (
        <div className='choice-card'>
            <span>{choicePos(choice)}</span>
            <div className="select-box" onClick={()=>selectChoices()}>
                <div className="select-view">
                    <img className='small' src={reactLogo} alt="test"/>
                    <span>
                        {!picked && "Your Choice"}
                        {picked && list[choiceIdx].name}
                    </span>
                    <div className="drop-down"></div>
                </div>
            </div>
            <div className="select-options" ref={drp}>
                {
                    list.map((v, i)=>{
                        return(
                            <div className="select-view" key={i} onClick={()=>selectPick(i)}>
                                <img className='small' src={reactLogo} alt="test"/>
                                <span>{v.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
