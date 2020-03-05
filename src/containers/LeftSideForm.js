import React from 'react'
import ImageUploader from 'react-images-upload';


class LeftSideForm extends React.Component{

    state={
        pictures:[]
    }

    onDrop = (pictureFiles, pictureDataURLs) => {
		this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
        });
	}
    render(){
        return(
            <div className = 'leftSideForm'>
                <label id='charName'>Name:<input name='charName'/></label>
                <label id='charClass'>Class:<input name='charClass'/></label>
                <label id='charLevel'>Level:<input name='charLevel' type='number'/></label>
                <label id='charRace'>Race:<input name='charRace'/></label>
                <label id='charImage'>Image:
                    <ImageUploader
                        className='charImage'
                        withIcon={true}
                        buttonText='Choose images'
                        onChange={this.onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
                </label>
                <label id='charStatus'>Status:<input name='charStatus' value='alive'/></label>
                <label id='charBio'>Bio:<textarea name='charBio' type='longText'/></label>
                <label id='charStengths'>Stengths:<input name='charStengths'/></label>
                <label id='charFlaws'>Flaws:<input name='charFlaws'/></label>
            </div>
        )
    }
}

export default LeftSideForm