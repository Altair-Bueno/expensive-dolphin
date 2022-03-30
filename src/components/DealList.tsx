import {DealListElement} from "./DealListElement";
import Col from "react-bootstrap/Col";
import "./DealList.css";
import {useState} from "react";
import {ShowMore} from "./ShowMore";

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
    const [numberOfDeals,setNumberOfDeals] = useState(6)
    const deals = props.elements.slice(0,numberOfDeals)
    const showMore = () => {
        setNumberOfDeals(numberOfDeals + 6)
    }
    return <div className={"container bg-secondary p-3"}>
      <div className={"row g-2 gy-3"}>
        {
          deals.map(x=><Col xs={12} md={6}>
                <DealListElement {...x}  />
              </Col>
          )
        }
      </div>
      {numberOfDeals < props.elements.length ? <ShowMore onClick={showMore}/>:<></>}
    </div>
}
