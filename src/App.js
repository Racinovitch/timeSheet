import Formulaire from "./Components/Form"
import Navi from "./Components/Header"
import TaskResume from './Components/TaskResume'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'



function App() {
  const [div1,setDiv1]=useState();
  const [div2,setDiv2]=useState();
  const [div3,setDiv3]=useState();
  const [div4,setDiv4]=useState();
  const [div5,setDiv5]=useState();
  const [div6,setDiv6]=useState();
  const [div7,setDiv7]=useState();

  let modifDiv=(input1,input2,input3,input4,input5,input6,input7)=>{
    setDiv1(input1)
    setDiv2(input2)
    setDiv3(input3)
    setDiv4(input4)
    setDiv5(input5)
    setDiv6(input6)
    setDiv7(input7)
    
    
  }
  
  let appelleFonction=()=>{
    <TaskResume/>
  }

  
  return (
    <div className="App">
      
        <Navi/>
        <Formulaire div1={modifDiv} />
        <TaskResume div1={div1} div2={div2} div3={div3} div4={div4} div5={div5} div6={div6} div7={div7} />
 
        
   
   
    </div>
  );
}

export default App;
