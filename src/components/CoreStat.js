import React from 'react'

function CoreStat(props){
    return(
        <label> {props.stat}:
            <div className='corStatBox'>
                <input name={`${props.stat}`}/>
            </div>
        </label>
    )
}

export default CoreStat