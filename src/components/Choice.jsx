import React from 'react'
import reactLogo from '../assets/react.svg'


export default function Choice({pos=1,name='', logo=''}) {

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
        <div className="choice">
            <div className="no">
                <span>{choicePos(pos)}</span>
            </div>
            <div className="select-view">
                <img className='small' src={reactLogo} alt="test"/>
                <span>{name}</span>
            </div>
        </div>
    )
}
