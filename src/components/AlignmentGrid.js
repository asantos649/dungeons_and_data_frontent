import React from 'react'

const AlignmentGrid = ({lawfulChaotic, goodEvil, updateCharacterAlignment}) => {

  const handleClick = (orderAxis, moralAxis) => {
    updateCharacterAlignment(orderAxis.toLowerCase(), moralAxis.toLowerCase())
  }

  // Renders one of the nine alignment boxes
  const renderBox = (orderAxis, moralAxis) => {
    const isAligned = ( lawfulChaotic === orderAxis.toLowerCase() && goodEvil === moralAxis.toLowerCase() )

    return (
      <div onClick={() => handleClick(orderAxis, moralAxis)}
      style={isAligned ? {backgroundColor: 'yellow'} : null}>

        <p>{orderAxis !== 'Neutral' ? `${orderAxis} ` : 'True '}{moralAxis}</p>

      </div>
    )
  }

  return (
    <div name='AlignmentGrid' id='alignment-grid'>

      {renderBox('Lawful', 'Good')}

      {renderBox('Lawful', 'Neutral')}

      {renderBox('Lawful', 'Evil')}

      {renderBox('Neutral', 'Good')}

      {renderBox('Neutral', 'Neutral')}

      {renderBox('Neutral', 'Evil')}

      {renderBox('Chaotic', 'Good')}

      {renderBox('Chaotic', 'Neutral')}

      {renderBox('Chaotic', 'Evil')}

    </div>
  )
}

export default AlignmentGrid
