import React from 'react'

// statKey is the stat being used by character, stat is the value, title is optional
function TextLine({statKey, stat, updateCharacter, title}){

    const handleChange = e => updateCharacter(statKey, e.target.value)

    return(
            <div className='TextLine'>
                <label> {title ? title.toUpperCase() : statKey.toUpperCase()}:
                    <input type='text' name={`${statKey}`} value={stat} onChange={handleChange} />
                </label>
            </div>
    )
}

export default TextLine
