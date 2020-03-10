import React, { useState } from 'react'
import LeftSideForm from'./LeftSideForm'
import RightSideForm from './RightSideForm'

const CharacterForm = props => {

  const [character, setCharacter] = useState({
    name: '',
    str: 10,
    con: 10,
    dex: 10,
    int: 10,
    wis: 10,
    cha: 10,
    level: 1,
    lawfulChaotic: 'lawful',
    goodEvil: 'good',
    class: '',
    race: '',
    equipment: [],
    attacks: [],
    abilitiesSpells: [],
    proficiencies: [],
    status: 'alive',
    bio: '',
    strengths: [],
    flaws: []
  })

  return(
      <div className = 'characterForm'>
          <LeftSideForm {...{character, setCharacter}}/>
          <RightSideForm {...{character, setCharacter}}/>
      </div>
  )

}

export default CharacterForm
