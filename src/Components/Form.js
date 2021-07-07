import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import './Forms.css'



function Formulaire(props) {

  const [input1,setInput1]=useState();
  let data1=(e)=>{
    setInput1(e)
  }
  
  const [input2,setInput2]=useState();
  let data2=(e)=>{
    setInput2(e)
  }
  const [input3,setInput3]=useState();
  let data3=(e)=>{
    setInput3(e)
  }
  const [input4,setInput4]=useState();
  let data4=(e)=>{
    setInput4(e)
  }
  const [input5,setInput5]=useState();
  let data5=(e)=>{
    setInput5(e)
  }
  const [input6,setInput6]=useState();
  let data6=(e)=>{
    setInput6(e)
  }
  const [input7,setInput7]=useState();
  let data7=(e)=>{
    setInput7(e)
  }
  // console.log(input1)
  // console.log(input2)
  // console.log(input3)
  // console.log(input4)
  // console.log(input5)
  // console.log(input6)
  // console.log(input7)
 return(

   <div>
     <h2 className="text-center my-3">Welcome </h2>
     <Form id="cadre" className="w-75 mx-auto d-flex flex-column">

<Form.Label className="label w-50 mx-auto my-1">Nom de la tâche</Form.Label>
<Form.Control className="w-50 mx-auto my-1" onInput={e=>data1(e.target.value)} type="text" placeholder="Entrez le nom de la tâche" />



<Form.Label className="label w-50 mx-auto my-1">Explication de la tâche</Form.Label>
<Form.Control className="w-50 mx-auto my-1" onInput={e=>data2(e.target.value)} type="text" placeholder="Explication de la tâche à exécuter" />

<Form.Label className="label w-50 mx-auto my-1">Tâche atrtribuée à:</Form.Label>
<Form.Control className="w-50 mx-auto my-1" onInput={e=>data3(e.target.value)} type="text" placeholder="Nom de la personne qui devra réaliser la tâche" />

<Form.Label className="label w-50 mx-auto my-1">Date départ</Form.Label>
<Form.Control className="w-50 mx-auto my-1" onInput={e=>data4(e.target.value)} type="date" />
<Form.Label className="label w-50 mx-auto my-1">Heure départ</Form.Label>
<Form.Control className="w-50 mx-auto my-1" onInput={e=>data5(e.target.value)} type="time" />

<Form.Label className="label w-50 mx-auto my-1">Date fin</Form.Label>
<Form.Control className="w-50 mx-auto my-1" onInput={e=>data6(e.target.value)} type="date" />
<Form.Label className="w-50 mx-auto my-1">Heure fin</Form.Label>
<Form.Control className="w-50 mx-auto my-1" onInput={e=>data7(e.target.value)} type="time" />


<Button onClick={()=>{props.div1(input1,input2,input3,input4,input5,input6,input7)}} className="w-25 mx-auto my-2" variant="primary">
Submit
</Button>
</Form>
   </div>

    
    )
}

export default Formulaire;