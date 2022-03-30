import {Price} from "./game/Price";
import {Rating} from "./game/Rating";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export {DealListElement};

interface DealListElementModel {
    title: string;
    dealID: string;
    gameID: string;
    salePrice: string;
    normalPrice: string;
    savings: string;
    steamRatingPercent: string;
    thumb: string;
    isOnSale?: any | null
}

function DealListElement(props: DealListElementModel) {
    return <Container>
        <Row>
            <Col md = {12} xl={3} className={"m-auto text-center"}>
                <img
                    src={props.thumb}
                    alt={props.title}
                    style={{maxHeight: '75px'}}
                />
            </Col>

            <Col md = {12} xl={6}>
                <Row>
                    <h5 className={"text-light title-text text-truncate"}>{props.title}</h5>
                </Row>
            </Col>

            <Col md = {12} xl={3}>
                <Row>
                    <div className={"text-end"}>
                        <Rating
                            steamRatingPercent={Number.parseFloat(props.savings)}/>
                    </div>
                </Row>
                <Row>
                    {/*TODO pass props properly*/}
                    <Price price={Number.parseFloat(props.salePrice)}
                           retailPrice={Number.parseFloat(props.normalPrice)}
                           savings={Number.parseInt(props.savings)}
                           isOnSale={props.isOnSale}/>
                </Row>
            </Col>
        </Row>
    </Container>
}
