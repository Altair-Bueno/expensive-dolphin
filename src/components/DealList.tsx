import { DealListElement } from "./DealListElement";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ShowMore } from "./ShowMore";
import "./DealList.css";

export { DealList };

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

interface DealListProps {
  elements: DealListElementModel[];
}

function DealList(props: DealListProps) {
  // RECEIVED EXACTLY 6 DEALS FROM OUTSIDE
  var el = props.elements;
  return (
    <>
      <div className="root-container">
        <h1 id="store">Steam</h1>
        <Container>
          <Row className="outer-row">
            <Col sm>
              <DealListElement
                title={el[0].title}
                dealID={el[0].dealID}
                gameID={el[0].gameID}
                salePrice={el[0].salePrice}
                normalPrice={el[0].normalPrice}
                savings={el[0].savings}
                steamRatingPercent={el[0].steamRatingPercent}
                thumb={el[0].thumb}
              />
            </Col>
            <Col sm>
              <DealListElement
                title={el[1].title}
                dealID={el[1].dealID}
                gameID={el[1].gameID}
                salePrice={el[1].salePrice}
                normalPrice={el[1].normalPrice}
                savings={el[1].savings}
                steamRatingPercent={el[1].steamRatingPercent}
                thumb={el[1].thumb}
              />
            </Col>
          </Row>
          <Row className="outer-row">
            <Col sm>
              <DealListElement
                title={el[2].title}
                dealID={el[2].dealID}
                gameID={el[2].gameID}
                salePrice={el[2].salePrice}
                normalPrice={el[2].normalPrice}
                savings={el[2].savings}
                steamRatingPercent={el[2].steamRatingPercent}
                thumb={el[2].thumb}
              />
            </Col>
            <Col sm>
              <DealListElement
                title={el[3].title}
                dealID={el[3].dealID}
                gameID={el[3].gameID}
                salePrice={el[3].salePrice}
                normalPrice={el[3].normalPrice}
                savings={el[3].savings}
                steamRatingPercent={el[3].steamRatingPercent}
                thumb={el[3].thumb}
              />
            </Col>
          </Row>
          <Row className="outer-row">
            <Col sm>
              <DealListElement
                title={el[4].title}
                dealID={el[4].dealID}
                gameID={el[4].gameID}
                salePrice={el[4].salePrice}
                normalPrice={el[4].normalPrice}
                savings={el[4].savings}
                steamRatingPercent={el[4].steamRatingPercent}
                thumb={el[4].thumb}
              />
            </Col>
            <Col sm>
              <DealListElement
                title={el[5].title}
                dealID={el[5].dealID}
                gameID={el[5].gameID}
                salePrice={el[5].salePrice}
                normalPrice={el[5].normalPrice}
                savings={el[5].savings}
                steamRatingPercent={el[5].steamRatingPercent}
                thumb={el[5].thumb}
              />
            </Col>
          </Row>
        </Container>
        <div id="showmore">
          <ShowMore onClick={() => {}} />
        </div>
      </div>
    </>
  );
}
