import { useState } from 'react'
import './App.css'

function App() {

  const [text, setText] = useState("")

  function handlesubmit(event: any) {
    event.preventDefault()
    console.log(text)
  }

  function handleChange (input : any) {
    setText(input.target.value)
  }

  return (
    <>
      <div>
        <h1 >
          <form onClick={handlesubmit}>
            <input type='text' value={text} onChange={handleChange} />
            <input type="submit"  />
          </form>
        </h1>
      </div>
    </>
  )
}

export default App
