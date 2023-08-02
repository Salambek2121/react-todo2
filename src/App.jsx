import  { useState } from 'react'


const App = () => {

  const [text,setText] = useState('')
  const [blur, setBlur] = useState(false)
  const [sended, setSended] = useState(false)

  const handleSetText = (e) => {
    setText(e.target.value)
    setSended(false)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(text);
    setText('')
    setBlur(false)
    setSended(true)
  }
  const handleBlur = () => {
    setBlur(true)
    setSended(false)
  }

  return (
    <>
    <form onSubmit={handleSubmit} >
      <input
       type="text"
        value={text} 
        onBlur={handleBlur}
        onChange={handleSetText}/>
      <button type='submit' disabled={!text}> click</button>
        {blur && !text ? <div>поле не должно быть пустым</div>: null}
        {sended ?  <div>отправлено</div>: null}
    </form>
    </>
  )
}

export default App
