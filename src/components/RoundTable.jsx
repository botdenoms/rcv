import React from 'react'
import RoundTableRow from './RoundTableRow'

export default function RoundTable({data={}}) {
    return (
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
                {/* loop through candidates */}
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
        </div>
    )
}
