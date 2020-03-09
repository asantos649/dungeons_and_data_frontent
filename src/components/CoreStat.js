import React, { useState } from 'react'

const CoreStat = ({stat, statKey, updateCharacter}) => {

  // Updates character with new stat
  const handleChange = e => updateCharacter(statKey, e.target.value)

  return(
      <label> {statKey}:
        <input type='number' min='0' max='30' name={`statKey`} value={stat} onChange={handleChange} />
      </label>
  )
}

export default CoreStat
