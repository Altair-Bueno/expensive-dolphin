import { Price } from "./game/Price";
import { Rating } from "./game/Rating";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DealListElement.css";

export { DealListElement };

function DealListElement() {
  return (
    <>
      <Container className="deal-list-element-root">
          <Row>
            <Col xs={2}>
                <img className="thumbnail" src="http://1.bp.blogspot.com/-aZ3T-AxlMGI/Tp-ar5XPCtI/AAAAAAAABT4/P1sbiS-SpIM/s1600/LEGO+Batman.jpg" alt={"Lego batman"} />
            </Col>
            <Col xs={6}>
                <Row>
                    <h1>Lego Batman</h1>
                </Row>
                <Row className="price">
                    <Price price={10} retailPrice={20} savings={50} isOnSale={true} />
                </Row>
            </Col>
            <Col xs={4}>
                <Rating steamRatingPercent={60} />
            </Col>
          </Row>
      </Container>
    </>
  );
}
