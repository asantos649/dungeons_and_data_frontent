import React from 'react'

// statKey is the stat being used by character, stat is the value, title is optional
function TextBox({statKey, stat, updateCharacter, title}){

    const handleChange = e => updateCharacter(statKey, e.target.value)

    return(
            <div className='TextBox'>
                <label> {title ? title.toUpperCase() : statKey.toUpperCase()}:
                    <textarea name={`${statKey}`} value={stat} onChange={handleChange} />
                </label>
            </div>
    )
}

export default TextBox
