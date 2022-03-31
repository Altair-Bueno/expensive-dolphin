import {Price} from "./game/Price";
import {Rating} from "./game/Rating";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BannerSize, LowestBanner} from "./game/LowestBanner";
import "./DealListElement.css"

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
    lowestEver?:any|null
}

function DealListElement(props: DealListElementModel) {
    const lowestBanner = <div className={"position-absolute"}>
        <LowestBanner bannerSize={BannerSize.small}/>
    </div>

    return <Container>
        <Row>
            <Col md = {12} xl={3} className={"m-auto text-center"}>
                {props.lowestEver && lowestBanner}
                <img
                    src={props.thumb}
                    alt={props.title}
                    className={"deal-list-element-img"}
                />
            </Col>

            <Col md = {12} xl={6}>
                <Row>
                    <h5 className={"text-light title-text text-start text-truncate"}>{props.title}</h5>
                </Row>
            </Col>

            <Col md = {12} xl={3}>
                <Row className={"text-start me-1"}>
                        <Rating steamRatingPercent={Number.parseFloat(props.savings)}/>
                </Row>
                <Row className={"d-inline-flex "}>
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
