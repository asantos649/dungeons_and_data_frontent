import React from 'react'

function CharStat(props){
    return(
            <div className='charStatBox'>
                <label> {props.stat}:
                    <input name={`${props.stat}`}/>
                </label>
            </div>
    )
}

export default CharStat