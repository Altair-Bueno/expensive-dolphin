import {Price} from "../common/Price";
import {Rating} from "../common/Rating";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BannerSize, LowestBanner} from "../common/LowestBanner";
import {Deal} from "../../../cheapshark/deals/listOfDeals";
import './DealListElement.css'
import {DealLookupParam} from "../../../cheapshark/deals";
import {UseQueryResult} from "react-query";
import {DealLookup} from "../../../cheapshark/deals/dealLookup";
import {AlertProps, ExpensiveAlert} from "../../wrappers/ExpensiveAlert";
import {useCheapShark} from "../../../cheapshark";
import {useEffect} from "react";

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

    /*
    function rating() {
        useEffect(() => {
            let result;
            let decoded = decodeURIComponent(props.dealID)
            const queryProps : DealLookupParam = {id: decoded}
            let query : UseQueryResult<DealLookup, AlertProps> = useCheapShark('https://www.cheapshark.com/api/1.0/deals', queryProps)
            if(query.isLoading){
                result = <small>Loading rating...</small>
            } else if (query.error) {
                result = <ExpensiveAlert {...query.error}/>
            } else if (query.data) {
                console.log(query.data)
                const props = {steamRatingPercent: Number.parseFloat((query.data.gameInfo.steamRatingPercent))}
                result = <Rating {...props}/>
            }
            return result;
        }, [])

    }

     */

    /*

    const decoded = decodeURIComponent(props.dealID)
    const queryProps : DealLookupParam = {id: decoded}
    const query: UseQueryResult<DealLookup, AlertProps> = useCheapShark('https://www.cheapshark.com/api/1.0/deals', queryProps)
    let ratingProps = {steamRatingPercent: 0}
    if(query.data){
        ratingProps ={steamRatingPercent: Number.parseFloat(query.data.gameInfo.steamRatingPercent)}
    }

     */


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
                    {/*<Rating dealId={props.dealID}/>*/}
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
