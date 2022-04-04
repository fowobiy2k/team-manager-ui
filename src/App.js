import { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
import './App.css';

function App() {
  // const [fixtures, setFixtures] = useState([]);
  const [loadin, setLoadin] = useState(false);
  const [message, setMessage] = useState([]);

  useEffect(() => {

    const getResources = async () => {

      setLoadin(true)

      const res = await fetch('/welcome')
      const data = await res.text()
      setMessage(data)
      console.log(data)

      // setFixtures(data)

      
      // axios.get('/posts').then(
      //   res => {
      //     const response = res.data;
      //     setFixtures(response);
      //     setLoadin(false)
      //     console.log('Data: ', response)

      //   }
      // )

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

      {/* {fixtures.length > 0 && fixtures.map(fixture => {
        return <p key={fixture.id}>{fixture.date}</p >
      })} */}

      {/* {
        loadin ? <p>Loadin...</p> :
          (
            fixtures.length > 0 ?
              fixtures.map(fixture => <p key={Math.random() * Date.now()} >{fixture?.title}</p>) :
              <p>No Items</p>
          )
      } */}

      { message ? <p>{message}</p> : <p>No message</p>}
    </div>

  );
}

export default App;
