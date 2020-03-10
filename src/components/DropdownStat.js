import React from 'react'

const DropdownStat = ({statKey, stat, updateCharacter, options}) => {

  const handleChange = e => {
    updateCharacter(statKey, e.target.value)
  }

  const renderOptions = () => options.map(option => <option key={option} value={option}>{option}</option>)

  return (
    <label> {statKey}:

      <select onChange={handleChange} value={stat}>

        {renderOptions()}

      </select>

    </label>
  )
}

export default DropdownStat
