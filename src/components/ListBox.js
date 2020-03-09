import React, {useState} from 'react'

// statKey is the stat collection being used by character, stat is an array of values
function ListBox({statKey, stat, updateCharacter, title}){

  const [input, setInput] = useState('')

  // const handleChange = e => updateCharacter(statKey, e.target.value)
  const handleChange = e => setInput(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    updateCharacter(statKey, [...stat, input])
    setInput('')
  }

  const handleRemove = item => {
    const newStatArray = stat.filter(oldItem => oldItem !== item)
    updateCharacter(statKey, newStatArray)
  }

  const mapStats = () => stat.map((item, i) => <li key={i} onClick={() => handleRemove(item)}>{item}</li>)

  return(
    <div className='ListBox'>

      <form onSubmit={handleSubmit}>

        <label> {title ? title.toUpperCase() : statKey.toUpperCase()}:

          <input onChange={handleChange} value={input}></input>

        </label>

      </form>

      <ul>

        {mapStats()}

      </ul>

    </div>
  )
}

export default ListBox
