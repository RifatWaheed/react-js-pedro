import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {

  const [count,setCount] = useState(0)

  const increase = ()=>{
    
    setCount(count+1)
    
  }


  const decrease = ()=>{
    console.log(count)
    setCount(count-1)
  }

  const setzero = ()=>{
    console.log(count)
    setCount(0)
  }

  return (


    <div className="App">
      
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={setzero}>Set Zero</button>
      <h1>{count}</h1>

    </div>
  );
}


const Planet = (props) => {
  return props.isGasPlanet && <h1>{props.name}</h1>


}
  
    

  





export default App;
