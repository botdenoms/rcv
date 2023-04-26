import React from 'react'
import reactLogo from '../assets/react.svg'

export default function ChoiceCard({choice, list=[]}) {
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
    return (
        <div className='choice-card'>
            <span>{choicePos(choice)}</span>
            <select>
                {
                    list.map((v,i)=>{
                        return (
                            <option value={v} key={i}>
                                {
                                    <div>
                                    <img className='small' src={reactLogo} alt="test"/>
                                    <span>{v}</span>
                                    </div>
                                }
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}
