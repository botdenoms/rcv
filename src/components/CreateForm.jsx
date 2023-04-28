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

    const removeCandidate = () =>{
        var temp = candidates
        temp.pop()
        setCandidates([...temp])
    }

    const createElection = ()=>{
        close()
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
                <input type="text" placeholder="Election title"/>
            </div>
            <div className="form-rows">
                <textarea placeholder="Election Description" cols="30" rows="5"></textarea>
            </div>
            <div className="can-box">
                <div className="cad-list">
                    {
                        candidates.length > 0? 
                        candidates.map((v, i)=> <CandidateCard key={i} remove={removeCandidate}/>):
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
            <div className="form-rows">
                <span className='lable-type'>Date</span>
                <input type="date" placeholder='mm/dd/yyyy'/>
            </div>
            <div className="form-rows">
                <span className='lable-type'>Duration</span>
                <input type="date" placeholder='mm/dd/yyyy'/>
            </div>
            {
                candidates.length > 1 && 
                <div className="form-rows">
                    <button type="submit" onClick={()=>createElection()}>Create</button>
                </div> 
            }
        </div>
    );
}

export default CreateForm;
