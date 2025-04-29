import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {

  const [status, setStatus] = useState("")

  useEffect(() => {
    fetch("/status")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(s => setStatus(s.response))
      .catch(e => console.error(e))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Status of Go Server Working: {status}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to={"/about"}>About</Link>
      </header>
    </div>
  );
}

export default Home;
