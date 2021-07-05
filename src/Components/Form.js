import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function Formulaire() {
 return(
    <Form className="w-75 m-auto d-flex flex-column">

    <Form.Label className="w-50 m-auto">Nom de la tâche</Form.Label>
    <Form.Control className="w-50 m-auto" type="text" placeholder="Entrez le nom de la tâche" />



    <Form.Label className="w-50 m-auto">Explication de la tâche</Form.Label>
    <Form.Control className="w-50 m-auto" type="text" placeholder="Explication de la tâche à exécuter" />
  
    <Form.Label className="w-50 m-auto">Tâche atrtribuée à:</Form.Label>
    <Form.Control className="w-50 m-auto" type="text" placeholder="Nom de la personne qui devra réaliser la tâche" />

    <Form.Label className="w-50 m-auto">Date départ</Form.Label>
    <Form.Control className="w-50 m-auto" type="date" />
    <Form.Label className="w-50 m-auto">Heure départ</Form.Label>
    <Form.Control className="w-50 m-auto" type="time" />

    <Form.Label className="w-50 m-auto">Date fin</Form.Label>
    <Form.Control className="w-50 m-auto" type="date" />
    <Form.Label className="w-50 m-auto">Heure fin</Form.Label>
    <Form.Control className="w-50 m-auto" type="time" />
 

  <Button className="w-25 m-auto" variant="primary" type="submit" onClick={newTask}>
    Submit
  </Button>
</Form>
    )
}

function newTask(){
    console.log("coucou")
}

export default Formulaire;