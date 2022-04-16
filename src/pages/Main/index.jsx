import './App.css';
import {Container, Row} from "react-bootstrap";

function Main() {


   return (
      <Container fluid className={"d-flex justify-content-center p-5"}>
         <Row>
            <h1 className={"Out"}>Login to view you very own Gateways</h1>
         </Row>
         <Row className={'in'} id={"contentView"}>
         </Row>
      </Container>
   );
}

export default Main;
