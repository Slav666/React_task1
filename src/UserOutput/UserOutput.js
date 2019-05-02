import React from 'react';
import './UserOutput.css';
const userOutput = (props) => {
    return (
    <div className="UserOutput">
            <p>UserName: {props.UserName} </p>
            <p>I hope I'll ve overwritten!</p>

    </div>
    )
}

export default userOutput;