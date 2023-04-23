import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary={2000} position="Senior Sde" company="Amazon"/>
      <Job salary={6000} position="jr sde" company="Google"/>
      <Job salary={4500} position="Java dev" company="Facebook"/>


    </div>
  );
}



const Job = (props)=>{
  return(
    <div>
      <h2>{props.salary}</h2>
      <h2>{props.position}</h2>
      <h2>{props.comp}</h2>
    </div>



  )




}

export default App;
