import React, {useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/api")
    .then(resp => resp.json())
    .then(data => {
      setData(data)
    })
  }, [])

  return (
    <div>
      {(typeof data.testing === 'undefined') ? (
        <p>Loading...</p>
      ): (
        data.testing.map((item, i) => (
          <p key={i}>{item}</p>
        ))
      )
      }
    </div>
  )
}

export default App