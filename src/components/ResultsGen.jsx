import {useState, useRef} from 'react'
import RoundTable from './RoundTable'
import RoundTableRow from './RoundTableRow'

export const ResultsGen = ({close, election={}}) => {

    const rounds = useRef(null)
    const [viewR, setViewR] = useState(true)

    const toggleR = ()=>{
        if(viewR){
            rounds.current.style.transform = `rotateZ(0deg)`
        }else{
            rounds.current.style.transform = `rotateZ(180deg)`
        }
        setViewR(!viewR)
    }

    const getVotes = ()=>{}
    const roundVotes = ()=>{}
    const runRound = ()=>{}
    const roundRounds = ()=>{}
    const publish = ()=>{}

    return (
        <div className='results-gen'>
            <div className="elec-details">
                <h3>Election title</h3>
                <div className="close" onClick={()=>close()}>
                x
                </div>
            </div>
            <div className="elec-details">
                <div className="totals">
                    <div className="row">
                        <span>Votes casted :</span>
                        <span>???</span>
                    </div>
                    <button type="submit">Get Votes</button>
                </div>
                <div className="vote-view">
                    <div className="vote-data">
                        <div className="prev">Previous</div>
                        <div className="next">Next</div>
                    </div>
                </div>
            </div>

            <div className="round">
                <h3>Round x</h3>
                <div className="outcome">
                    {/* table, candidate, votes, percent, status */}
                    <div className="tb-header">
                        <span>Candidate name</span>
                        <span>gains</span>
                        <span>Votes</span>
                        <span>percent</span>
                        <span>status</span>
                    </div>
                    <RoundTableRow/>
                    <RoundTableRow/>
                    <RoundTableRow/>
                    <div className="other">
                        <div className="data-box">
                            <span>Final : </span>
                            <span>False</span>
                        </div>
                        <div className="data-box">
                            <span>Inactive Votes : </span>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="count-status">
                    <div className="current">
                        <span>count</span>/
                        <span>Total</span>
                    </div>
                    <button type='submit'>Run</button>
                    <span>??% done</span>
                </div>
            </div>

            <div className="view-more">
                <span className='toggle' onClick={()=>toggleR()}>
                    Rounds
                    <div className="drop-down down" ref={rounds}></div> 
                </span>
                {
                    viewR &&
                    <RoundTable/>
                }
                {
                    viewR &&
                    <div className="paging">
                        <span className='btns'>prev</span>
                        <span>0</span>
                        <span className='btns'>next</span>
                    </div>
                }
            </div>
            {/* 
             1.0 details of the election
             2.0 candidates and votes of the election(Voter as for more infro )
             3.0 Round 1 tabulation of votes => RoundObj()
             .Functions{
                  1.0 basic count
             }
             4.0 check for subsiquent rounds conditions(no 50%+)
             .Round setup{
                 1. eliminate last
                 2. ignore 1st choice of eliminated
                 3. count
              }
             5.0 Round [?] tabulation of votes => RoundObj()
             6.0 check for subsiquent rounds conditions
             ...
             */}
        </div>
    )
}
