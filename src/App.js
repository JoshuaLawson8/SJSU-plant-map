import './App.css';
import { Map } from './components'; 
import {useState, useEffect} from "react";

function App() {
  const [plants, setPlants] = useState([])

  useEffect( () => {
    const getPlants = async () => {
      const plantsFromServer = await fetchPlants()
      setPlants(plantsFromServer)
    }
  
    getPlants()
  }, [])
  
  const fetchPlants = async () => {
    const res = await fetch('http://localhost:5000/plants')
    const data = await res.json()
  
    return data
  }
  
  return (
    <Map plants={plants} setPlants={setPlants} />
  );
}

export default App;
