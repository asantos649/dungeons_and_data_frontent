import React from 'react'

function ListBox(props){
    return(
            <div className='ListBox'>
                <label> {props.title}:
                    <textarea name={`${props.title}`}/>
                </label>
            </div>
    )
}

export default ListBox