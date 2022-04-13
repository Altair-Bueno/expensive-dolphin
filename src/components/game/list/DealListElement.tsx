import {Price} from "../common/Price";
import {Rating} from "../common/Rating";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BannerSize, LowestBanner} from "../common/LowestBanner";
import {Deal} from "../../../cheapshark/deals/listOfDeals";

export {DealListElement};

function DealListElement(props: Deal) {
    const priceProps = {
        price: Number.parseFloat(props.salePrice),
        retailPrice: Number.parseFloat(props.normalPrice),
        savings:Number.parseInt(props.savings),
        isOnSale:!!props.isOnSale
    }
    const ratingProps = {
        steamRatingPercent: Number.parseFloat(props.savings)
    }

    const lowestBanner = <div className={"position-absolute"}>
        <LowestBanner bannerSize={BannerSize.small}/>
    </div>

    return <Container>
        <Row>
            <Col className={"m-auto text-center"} md={3}>
                {props.lowestEver ? lowestBanner:<></>}
                <img
                    src={props.thumb}
                    alt={props.title}
                    className={"img-fluid deal-list-element"}
                />
            </Col>

            <Col md={5}>
                <Row>
                    <h5 className={"text-light title-text text-start text-truncate"}>
                        {props.title}
                    </h5>
                </Row>
                <Row className={"text-start me-1"}>
                    <Rating {...ratingProps}/>
                </Row>
            </Col>

            <Col>
                <Row className={"d-inline-flex"}>
                    <Price {...priceProps}/>
                </Row>
            </Col>
        </Row>
    </Container>
}
