import logo from './logo.svg';
import './App.css';

function App() {

  const planets = [
    {name : "Mars" , isGasPlanet: false},
    {name : "Earth" , isGasPlanet : true},
    {name : "Jupiter", isGasPlanet : true },
    {name : "Venus" , isGasPlanet : false}
  ];


  return (
    <div className="App">
      {planets.map((planet,key)=> {
        return <Planet name={planet.name} isGasPlanet={planet.isGasPlanet}/>
      }

      )}
    

    </div>
  );
}


const Planet = (props) => {
  return props.isGasPlanet && <h1>{props.name}</h1>


}
  
    

  





export default App;
