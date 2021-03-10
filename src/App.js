import { Button } from 'antd';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  
  const [resourceType, setresourceType] = useState('users')
  const [items, setitems] = useState([])
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => setitems(json))
    
  },[resourceType])
  
  return (
    <div className="App">
      
      <Button type="secondary" onClick={()=>setresourceType('users')}>
        Fetch user</Button>
      <Button type="primary" onClick={()=>setresourceType('photos')}>
        Fetch photos</Button>
        <h1>{resourceType}</h1>
        
           
           {items.map(item=>{
            return(
           <>
              <p>{item.name}</p>
           
              <img src={item.thumbnailUrl} alt={item.title} ></img>
              
            
            </>
              )
                    })}
                  
        
      
    </div>
  );
}

export default App;
