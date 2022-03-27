import { Price } from "./game/Price";
import { Rating } from "./game/Rating";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DealListElement.css";

export { DealListElement };

interface DealListElementModel {
  title: string;
  dealID: string;
  gameID: string;
  salePrice: string;
  normalPrice: string;
  savings: string;
  steamRatingPercent: string;
  thumb: string;
}


function DealListElement(props: DealListElementModel) {
  return (
    <>
      <Container className="deal-list-element-root">
        <Row>
          <Col lg={2} xs={12} className={"p-1"}>
            <img
              className="thumbnail"
              src={props.thumb}
              alt={props.title}
            />
          </Col>
          <Col lg={6} >
            <Row>
              <h4 className={"text-light title-text ps-sm-4 ps-xs-2"}>{props.title}</h4>
            </Row>
            
          </Col>
          <Col lg={4} xs={12}>
            <Rating steamRatingPercent={Number.parseFloat(props.savings)} />
            <Row className="price">
                <Price price={Number.parseFloat(props.salePrice)} retailPrice={Number.parseFloat(props.normalPrice)} savings={Number.parseInt(props.savings)} isOnSale={true} />
            </Row>
            

          </Col>
        </Row>
      </Container>
    </>
  );
}
