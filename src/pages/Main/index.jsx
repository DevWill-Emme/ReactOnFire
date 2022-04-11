import './App.css';
import {Container, Row} from "react-bootstrap";

function Main() {
   return (
       <Container fluid className={"d-flex justify-content-center m-5"}>
           <Row>
               <h1 className={"log-in"}>You Are Login</h1>
           </Row>
       </Container>
   );
}

export default Main;
