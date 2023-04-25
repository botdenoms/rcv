import React,{useState} from 'react'

export default function CandidateAddModal({close, add}) {
    
    const [profile, setProfile] = useState(false)
    const [logo, setlogo] = useState(false)
    const upload = ()=>{
        setProfile(true)
    }
    const uploadLogo = ()=>{
        setlogo(true)
    }

    return (
        <div className='modal'>
            <div className="close onmodel" onClick={()=>close(false)}>x</div>
            <div>
                <div className="form-rows">
                    <input type="text" placeholder="Candidate name"/>
                </div>
                <div className="form-rows">
                    <input type="file" className='picker' onChange={()=>upload()}/>
                    <div className='img-hold'>
                        {
                            profile? <img src="" alt="none"/>
                            : <span>No image</span>
                        }
                    </div>
                </div>
                <div className="form-rows">
                    <input type="text" placeholder="party name"/>
                </div>
                <div className="form-rows">
                    <input type="file" className='picker' onChange={()=>uploadLogo()}/>
                    <div className='img-hold'>
                        {
                            logo? <img src="" alt="none"/>
                            : <span>No image</span>
                        }
                    </div>
                </div>
            </div>
            <button type="submit" onClick={()=> add()}>Add</button>
        </div>
    )
}
