import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(res => {
        setData(res.data);
      })
  }, []);
  return (
    <div>
      {data} this is a test
    </div>
  );
}

export default App;
