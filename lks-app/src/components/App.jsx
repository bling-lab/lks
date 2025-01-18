import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'




function App() {

  const [data, setData] = useState([])
  const navigte = useNavigate()
  const getData = async () => {
    const response = (await axios.get('http://localhost:5000/api/berita')).data
    setData(response)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container">
      <nav>
        <h1>CRUD Berita</h1>
        <button onClick={() => { navigte('/create') }} id='btn-post'>Posting Berita</button>

      </nav>
      <div className="content">

        {data.map(data => {
          return (
            <div className="card" key={data.title}>
              <img src={data.image} alt="image" />
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default App
