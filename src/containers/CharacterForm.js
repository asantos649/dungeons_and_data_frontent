import React from 'react'
import LeftSideForm from'./LeftSideForm'
import RightSideForm from './RightSideForm'

class CharacterForm extends React.Component{
    render(){
        return(
            <div className = 'characterForm'>
                <LeftSideForm/>
                <RightSideForm/>
            </div>
        )
    }
}

export default CharacterForm