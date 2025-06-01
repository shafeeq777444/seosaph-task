import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DisplayTasks = () => {
  const [state, setState] = useState([])
  const [visibleDescriptions, setVisibleDescriptions] = useState({})

  useEffect(() => {
    (async function () {
      const { data } = await axios("http://localhost:4000/api/task/get")
      console.log(data.result)
      setState(data.result)
    })()
  }, [])

  const toggleDescription = (index) => {
    setVisibleDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div>
      {
        state.map((x, ind) => (
          <div key={ind} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>{x.title}</p>
                <p style={{ margin: '5px 0', color: '#666' }}>{new Date(x.date).toLocaleString()}</p>
              </div>
              <button 
                onClick={() => toggleDescription(ind)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  fontSize: '18px',
                  padding: '5px'
                }}
              >
                👁️
              </button>
            </div>
            {visibleDescriptions[ind] && (
              <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '3px' }}>
                <p style={{ margin: '0' }}>{x.description}</p>
              </div>
            )}
          </div>
        ))
      }
    </div>
  )
}

export default DisplayTasks