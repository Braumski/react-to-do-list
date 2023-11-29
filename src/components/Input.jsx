
import {useState} from 'react'

export default function Import(){

  const [inputValue, setInputValue] = useState("Write a to-do item!")

  function handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return(
    <>
    <label for="input"></label>
    <input 
      type="text" 
      id="input" 
      name="input" 
      placeholder={inputValue}
      onChange={handleInputChange}
    />
    </>
  )
}