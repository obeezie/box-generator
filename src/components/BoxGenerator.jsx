import React, {useState} from 'react'

const BoxGenerator = (props) => {

  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewColor(color)

  }


  return (
    <fieldset>
      <legend>BoxGenerator.jsx</legend>
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Choose a color</label>
        <input type="text" name="color" onChange = {(e) => setColor(e.target.value)} value = {color}/>
        <input type="submit" value= "submit" />
      </form>
    </fieldset>
  )
}

export default BoxGenerator
