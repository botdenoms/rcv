import { useState } from 'react'
import CandidateAddModal from './CandidateAddModal'
import CandidateCard from './CandidateCard'

const CreateForm = ({close}) => {

    const [candidates, setCandidates] = useState([])
    const [open, setOpen] = useState(false)

    const addCandidate = ()=>{
        var temp = candidates
        temp.push(0)
        setCandidates([...temp])
        setOpen(false)
    }

    return (
        <div className="create-form">
            {
                open && <CandidateAddModal close={setOpen} add={addCandidate}/>
            }
            <div className="top">
                <span className='span-head'>New election</span>
                <div className="close" onClick={()=>close()}>
                    x
                </div>
            </div>
            <div className="form-rows">
                <input type="text" name="title" id=""  placeholder="Election title"/>
            </div>
            <div className="form-rows">
                <textarea placeholder="Election Description" cols="30" rows="5"></textarea>
            </div>
            <div className="can-box">
                <div className="cad-list">
                    {
                        candidates.length > 0? 
                        candidates.map((v, i)=> <CandidateCard key={i}/>):
                        <div className='empty'>
                           <span>No Candidates present</span> 
                           <span>Add one below</span> 
                        </div>
                    }
                </div>
                <div className="add" onClick={()=>setOpen(true)}>+</div>
            </div>
            <div className="form-rows">
                <input className="chk-box" type="checkbox"/>
                <span>multi-cast</span>
            </div>
            <div className="form-rows">
                <input className="chk-box" type="checkbox"/>
                <span>Anonimous casting</span>
            </div>
        </div>
    );
}

export default CreateForm;
