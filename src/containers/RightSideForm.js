import React from 'react'
import CoreStat from '../components/CoreStat'
import AlignmentGrid from '../components/AlignmentGrid'
import ListBox from '../components/ListBox'
// import CharStat from '../components/CharStat'
// import TextBox from '../components/TextBox'

const RightSideForm = ({character, setCharacter}) => {

  // Method to update a character's stat
  const updateCharacter = (key, value) => setCharacter({...character, [key]: value})

  const updateCharacterAlignment = (lawfulChaotic, goodEvil) => setCharacter({...character, lawfulChaotic, goodEvil})

  return(
    <div className = 'rightSideForm'>

        <div className='coreStats'>
            <CoreStat statKey='str' stat={character.str} updateCharacter={updateCharacter} />
            <CoreStat statKey='con' stat={character.con} updateCharacter={updateCharacter} />
            <CoreStat statKey='dex' stat={character.dex} updateCharacter={updateCharacter} />
            <CoreStat statKey='wis' stat={character.wis} updateCharacter={updateCharacter} />
            <CoreStat statKey='int' stat={character.int} updateCharacter={updateCharacter} />
            <CoreStat statKey='cha' stat={character.cha} updateCharacter={updateCharacter} />
        </div>

        <div className='alignmentStats'>
          <AlignmentGrid {...{lawfulChaotic: character.lawfulChaotic, goodEvil: character.goodEvil, updateCharacterAlignment}}/>
        </div>

        <div className='topList'>
            <ListBox {...{statKey: 'equipment', stat: character.equipment, updateCharacter}}/>
            <ListBox {...{statKey: 'attacks', stat: character.attacks, updateCharacter}} />
        </div>

        <div className='bottomList'>
            <ListBox {...{title: 'Abilities / Spells', statKey: 'abilitiesSpells', stat: character.abilitiesSpells, updateCharacter}} />
            <ListBox {...{statKey: 'proficiencies', stat: character.proficiencies, updateCharacter}} />
        </div>

    </div>
  )
}

export default RightSideForm
