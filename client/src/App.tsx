import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("http://:5000/aplocalhosti")
    .then(resp => resp.json())
    .then(data => {
      setData(data)
    })
  }, [])

  return (
    <div className="App">
      {(typeof data.testing === 'undefined') ? (
        <p>Loading...</p>
      ): (
        data.testing.map((item, i) => (
          <p key={i}>{item}</p>
        ))
      )
      }
    </div>
  );
}

export default App;
