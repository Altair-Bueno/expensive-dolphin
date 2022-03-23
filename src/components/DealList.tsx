import { DealListElement } from "./DealListElement"
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./DealList.css"

export { DealList };

function DealList() {
  return (
    <>
    <div className="root-container">
        <h1 id="store">Steam</h1>
        <Container>
            <Row className="outer-row">
            <Col sm><DealListElement /></Col>
            <Col sm><DealListElement /></Col>
            </Row>
            <Row className="outer-row">
            <Col sm><DealListElement /></Col>
            <Col sm><DealListElement /></Col>
            </Row>
            <Row className="outer-row">
            <Col sm><DealListElement /></Col>
            <Col sm><DealListElement /></Col>
            </Row>
        </Container>
    </div>
      
    </>
  );
}
