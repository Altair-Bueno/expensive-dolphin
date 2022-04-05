import { DealListElement } from "./DealListElement";
import Col from "react-bootstrap/Col";
import "./DealList.css";
import { useState } from "react";
import { ShowMore } from "./ShowMore";
import { Button } from "react-bootstrap";
import { ListOfDealsReduced } from "../cheapshark/deals/listOfDeals";
import { ExpensiveGame } from "./game/ExpensiveGame";

export { DealList };

interface DealListProps {
  elements: ListOfDealsReduced[];
}

function DealList(props: DealListProps) {
  const [numberOfDeals, setNumberOfDeals] = useState(6);
  const deals = props.elements.slice(0, numberOfDeals);
  const showMore = () => {
    setNumberOfDeals(numberOfDeals + 6);
  };
  const [game, setGame] = useState<ListOfDealsReduced | null>(null);

  if (game === null) {
    return (
      <div className={"container bg-secondary p-3"}>
        <div className={"row g-2 gy-3"}>
          {deals.map((x) => (
            <Col className="dealdiv" xs={12} md={6}>
              <button
                type="button"
                className="btn text-light shadow-none"
                onClick={() => {
                  setGame({
                    title: x.title,
                    dealID: x.dealID,
                    gameID: x.gameID,
                    salePrice: x.salePrice,
                    normalPrice: x.normalPrice,
                    savings: x.savings,
                    steamRatingPercent: x.steamRatingPercent,
                    thumb: x.thumb,
                  }
                  );
                }}
              >
                <DealListElement {...x} />
              </button>
            </Col>
          ))}
        </div>
        {numberOfDeals < props.elements.length ? (
          <ShowMore onClick={showMore} />
        ) : (
          <></>
        )}
      </div>
    );
  }

  return (
    <ExpensiveGame
      title={game.title}
      dealID={game.dealID}
      gameID={game.gameID}
      salePrice={game.salePrice}
      normalPrice={game.normalPrice}
      savings={game.savings}
      steamRatingPercent={game.steamRatingPercent}
      thumb={game.thumb}
    />
  );
}
