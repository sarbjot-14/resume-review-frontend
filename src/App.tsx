import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get('http://localhost:5000/api/resumes');
      console.log(data);
    };
    getData();
  }, []   );
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
      </h1>
    </div>
  );
}

export default App;
