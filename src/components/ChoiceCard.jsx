import {useRef, useState} from 'react'

import reactLogo from '../assets/react.svg'

export default function ChoiceCard({choice, list=[], guide}) {
    const drp = useRef(null)
    const drpicon = useRef(null)
    const [picked, setPicked] = useState(false)
    const [opened, setOpened] = useState(false)
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
        if(opened){
            drp.current.style.display = 'none'
            setOpened(!opened)
            drpicon.current.style.transform = `rotateZ(0deg)`
            return
        }
        drp.current.style.display = 'block'
        drpicon.current.style.transform = `rotateZ(180deg)`
        setOpened(!opened)
    }

    const selectPick = (index)=>{
        drp.current.style.display = 'none'
        setChoiceIdx(index)
        setOpened(false)
        drpicon.current.style.transform = `rotateZ(0deg)`
        if (list.length == 1) {
            setPicked(true)
        }else{
            setPicked(false)
        }
        guide(choice, index)
    }

    return (
        <div className='choice-card'>
            <span className='bg-text'>{choicePos(choice + 1)}</span>
            <div className="select-box" onClick={()=>selectChoices()}>
                <div className="select-view">
                    <img className='small' src={reactLogo} alt="test"/>
                    <span>
                        {!picked && "Your Choice"}
                        {picked && list[choiceIdx].name}
                    </span>
                    <div ref={drpicon} className="drop-down"></div>
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
