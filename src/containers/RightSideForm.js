import React, { useState } from 'react'
import CoreStat from '../components/CoreStat'
import CharStat from '../components/CharStat'
import ListBox from '../components/ListBox'

const RightSideForm = props => {

  const [character, setCharacter] = useState({
    name: '',
    str: 0,
    con: 0,
    dex: 0,
    int: 0,
    wis: 0,
    cha: 0,
    lawfulChaotic: 'lawful',
    goodEvil: 'good',
    class: '',
    race: '',
    equipment: '',
    attacks: '',
    abilitiesSpells: '',
    proficiencies: [],
    status: 'alive',
    flaws: ''
  })

  return(
    <div className = 'rightSideForm'>

        <div className='bioStats'>
          // name goes here
        </div>

        <div className='coreStats'>
            <CoreStat stat='STR'/>
            <CoreStat stat='CON'/>
            <CoreStat stat='DEX'/>
            <CoreStat stat='WIS'/>
            <CoreStat stat='INT'/>
            <CoreStat stat='CHA'/>
        </div>

        <div className='alignmentStats'>
          // alignment goes here
        </div>

        <div className='classStat'>
          // Class goes here
        </div>

        <div className='raceStat'>
          // race goes here
        </div>

        <div className='topList'>
            <ListBox title='Equipment'/>
            // Text
            <ListBox title='Attacks'/>
        </div>

        <div className='bottomList'>
            <ListBox title='Abilities/Spells'/>
            // Text
            <ListBox title='Proficiencies'/>
            // List
        </div>

        <div className='status'>
          // Character status goes here (alive, dead, retired, etc)
        </div>

        <div className='flawStats'>
          // flaw goes here
          // Text
        </div>

    </div>
  )
}

export default RightSideForm
