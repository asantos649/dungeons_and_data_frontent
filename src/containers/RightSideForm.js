import React from 'react'
import CoreStat from '../components/CoreStat'
import CharStat from '../components/CharStat'
import ListBox from '../components/ListBox'

class RightSideForm extends React.Component{

    render(){
        return(
            <div className = 'rightSideForm'>
                <div className='coreStats'>
                    <CoreStat stat='STR'/>
                    <CoreStat stat='CON'/>
                    <CoreStat stat='DEX'/>
                    <CoreStat stat='WIS'/>
                    <CoreStat stat='INT'/>
                    <CoreStat stat='CHA'/>
                </div>
                <div className='charStats'>
                    <CharStat stat='AC'/>
                    <CharStat stat='HP'/>
                    <CharStat stat='Speed'/>
                </div>
                <div className='topList'>
                    <ListBox title='Equipment'/>
                    <ListBox title='Attacks'/>
                </div>
                <div className='bottomList'>
                    <ListBox title='Abilities/Spells'/>
                    <ListBox title='Proficiencies/Languages'/>
                </div>
            </div>
        )
    }
}

export default RightSideForm