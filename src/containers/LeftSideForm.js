import React from 'react'
import TextLine from '../components/TextLine'
import TextBox from '../components/TextBox'
import ListBox from '../components/ListBox'
import DropdownStat from '../components/DropdownStat'
// import ImageUploader from 'react-images-upload';

const LeftSideForm = ({setCharacter, character}) => {

  // Method to update a character's stat
  const updateCharacter = (key, value) => setCharacter({...character, [key]: value})

  return(
      <div className = 'leftSideForm'>

        <TextLine {...{statKey: 'name', stat: character.name, updateCharacter}} />

        <TextLine {...{statKey: 'class', stat: character.class, updateCharacter}} />

        <TextLine {...{statKey: 'race', stat: character.race, updateCharacter}} />

        <DropdownStat {...{statKey: 'level', stat: character.level, updateCharacter, options: [...Array(21).keys()].slice(1)}} />

        <TextBox {...{statKey: 'bio', stat: character.bio, updateCharacter, title: 'Character Bio'}} />

        <DropdownStat {...{statKey: 'status', stat: character.status, updateCharacter, options: ['alive', 'dead', 'retired']}} />

        <ListBox {...{updateCharacter, statKey: 'strengths', stat: character.strengths}} />

        <ListBox {...{updateCharacter, statKey: 'flaws', stat: character.flaws}} />

      </div>
  )
}

export default LeftSideForm

// Dead code for future picture selector

// const [pictures, setPictures] = useState([])

//   onDrop = (pictureFiles, pictureDataURLs) => {
// 	this.setState({
//           pictures: this.state.pictures.concat(pictureFiles),
//       });
// }

/*
<label id='charImage'>Image:
        <ImageUploader
        className='charImage'
        withIcon={true}
        buttonText='Choose images'
        onChange={this.onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
</label>
/>*/
