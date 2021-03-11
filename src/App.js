// import { Button } from 'antd';
import './App.css';
import { useEffect,useState } from 'react';
import Navbar from './Components/Navbar';
import Userlist from './Components/Userlist';

function App() {
  const [click,setClick]= useState(false)
  const [resourceType, setresourceType] = useState('')
  const [items, setItems] = useState([])
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => setItems(json))
    
  },[resourceType])

 
  
  return (
    <div className="App">
     <Navbar resourceType={resourceType} setresourceType={setresourceType} items={items} click={click} 
     setClick={setClick} /> 
      {click &&  items.map(item=>{
      return (
      <Userlist item={item} key={item.userId}/>
      ) 
     })
}
     </div>  
      );
}

export default App;
