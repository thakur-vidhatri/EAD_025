import { useState } from 'react'

import './App.css'

function App() {
  const [password, setpassword] = useState("")
  const [strength, setstrength] = useState("")
  const check = () => {
    let count = 0
    if (/.{8,}/.test(password)) {
      count++
    }
    if (/[a-z]/.test(password)) {
      count++
    }
    if (/[A-Z]/.test(password)) {
      count++
    }
    if (/[0-9]/.test(password)) {
      count++
    }
    if (/[!@#$%^&*]/.test(password)) {
      count++
    }
    if (count === 5) {
      setstrength("strong")
    }
    else if (count >= 3) {
      setstrength("medium")
    }
    else if (count >= 1) {
      setstrength("weak")
    }
    else {
      setstrength("very weak")
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    check()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="App">
          <h1>Password Strength Checker</h1>
          <input
            type="text"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter your password"
          /><br />
          <button type='submit'>Check</button>
          <h2>Password strength: {strength}</h2>
        </div>
      </form>

    </>
  )
}

export default App
