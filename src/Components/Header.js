import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Navi(){
    return(
        <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">TimeSheet</span>
        <Form className="d-flex w-50">
        <Form.Label className="m-2 w-25">e-mail</Form.Label>
        <Form.Control type="email" placeholder="votre email" />
        <Form.Label className="m-2">Password</Form.Label>
        <Form.Control type="password" placeholder="votre password" />
        <Button variant="primary" type="submit">
        Submit
        </Button>
        </Form>
        
        </nav>
    )
    
}

export default Navi;