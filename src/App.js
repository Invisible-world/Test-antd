import { Button } from 'antd';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  
  const [resourceType, setresourceType] = useState('users')
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => console.log(json))
    
  },[resourceType])
  
  return (
    <div className="App">
      
      <Button type="secondary" onClick={()=>setresourceType('users')}>
        Fetch user</Button>
      <Button type="primary" onClick={()=>setresourceType('photos')}>
        Fetch photos</Button>
        <h1>View Fetched Resource in console later it  will be display here :{resourceType}</h1>
    </div>
  );
}

export default App;
