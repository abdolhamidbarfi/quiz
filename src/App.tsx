import { useState } from 'react'
import './App.css'

function App() {

  const [text, setText] = useState("")
  const [start, setStart] = useState(false)

  function handleSubmit(e: any) {
    e.preventDefault()
    console.log(text)
    setStart(true)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' className='border-gray-200 border-2 ' onChange={(e) => setText(e.target.value)} value={text} />
          <button type='submit'>Click</button>
        </form>
        <div id='timer'>
          {start ? <span>{text}</span> : null}
        </div>
      </div>
    </>
  )
}

export default App
