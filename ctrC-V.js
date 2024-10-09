//dán cu này lên đầu php của m
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost/path_to_your_php_file.php')  // đổi URL để nó giống với cái webssite hay php của m
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from SQL Database</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name} - {item.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
