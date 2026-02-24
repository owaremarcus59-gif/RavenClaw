
import '../App.css';
import {MyComp} from './component';
import { useState } from 'react';


function App() {
  // const name = ["John", "Jane", "Doe"];

const [name , setName] = useState("Amoah");

const [count,setCount]=useState(0);
  
  return (
    <div className="h1">
    <button onClick={()=> setName("Gideon")}>Click Me</button>
    <button onClick={()=> setCount(count+1)}>Count: {count}</button>

     <MyComp name ={name}/>
    <nav>
      <ul>
        <li><a href="home">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
    </nav>
   
    </div>
  
  );
}


export default App;
