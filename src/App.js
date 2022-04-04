import { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {
  const [fixtures, setFixtures] = useState([]);
  // const [message, setMessage] = useState([]);

  useEffect(() => {

    const getResources = async () => {

      axios.get('/allmatches').then(
        res => {
          const response = res.data;
          setFixtures(response);
          console.log('Data: ', response)

        }
      )

    }

    getResources()

  }, [])

  // Fetch Fixtures
  // const fetchFixtures = async () => {


  //   const res = await fetch('/allmatches')
  //   const data = await res.json()
  //   console.log(data)
  //   setFixtures(data)

  //   return data
  // }

  return (

    <div>
      <h1>Welcome</h1>

      {fixtures.length > 0 && fixtures.map(fixture => {
        return <p key={fixture.id}>{fixture.date}</p >
      })}
    </div>

  );
}

export default App;
