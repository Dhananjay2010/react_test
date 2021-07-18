import React from "react"

function Submit(props){
    return (
        <button type="button" class="btn btn-secondary" onClick={()=>{
            props.AddNew();
        }}>Submit</button>
    )
}

export default Submit;