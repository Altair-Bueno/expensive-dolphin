import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "../../resources/css/PriceTable.css";

export { PriceTable };

interface TableElement {
  internalName: string;
  title: string;
  metacriticLink: string | null;
  dealID: string;
  storeID: string;
  gameID: string;
  salePrice: string;
  normalPrice: string;
  isOnSale: string;
  savings: string;
  metacriticScore: string;
  steamRatingText: string | null;
  steamRatingPercent: string;
  steamRatingCount: string;
  steamAppID: string | null;
  releaseDate: number;
  lastChange: number;
  dealRating: string;
  thumb: string;
}

interface PriceTableProps {
  tablemodel: TableElement[];
}

function toFixed(value: number, precision: number) {
    var precision = precision || 0,
        power = Math.pow(10, precision),
        absValue = Math.abs(Math.round(value * power)),
        result = (value < 0 ? '-' : '') + String(Math.floor(absValue / power));

    if (precision > 0) {
        var fraction = String(absValue % power),
            padding = new Array(Math.max(precision - fraction.length, 0) + 1).join('0');
        result += '.' + padding + fraction;
    }
    return result;
}

function PriceTable(props: PriceTableProps) {
  enum order {
    asc,
    desc,
    normal,
  }

  var sorted = props.tablemodel.sort((a,b) => {
    return (parseFloat(a.savings) - parseFloat(b.savings));
    /*
    if (ordered.order === order.asc){
        if(ordered.rownum === 0){
            return (parseInt(a.storeID) - parseInt(b.storeID));
        } else if (ordered.rownum === 1){
            return (parseFloat(a.salePrice) - parseFloat(b.salePrice));
        } else if (ordered.rownum === 2){
            return (parseFloat(a.savings) - parseFloat(b.savings));
        } else {
            return (parseFloat(a.normalPrice) - parseFloat(b.normalPrice));
        }
    } else if (ordered.order === order.desc){
        if(ordered.rownum === 0){
            return (parseInt(b.storeID) - parseInt(a.storeID));
        } else if (ordered.rownum === 1){
            return (parseFloat(b.salePrice) - parseFloat(a.salePrice));
        } else if (ordered.rownum === 2){
            return (parseFloat(b.savings) - parseFloat(a.savings));
        } else {
            return (parseFloat(b.normalPrice) - parseFloat(a.normalPrice));
        }
    } */

  });
  const headers = ["Shop", "Current Price", "Deal", "Retail Price", "Link"]

  const [ordered, setOrdered] = useState({
    order: order.normal,
    rownum: 0,
  });

  return (
    <Table striped bordered hover variant="dark" className="table">
      <thead>
        <tr>
            {headers.map((element, index) => {
                return(
                    <th onClick={() => setOrdered({ order: ordered.order++, rownum: index })}>
                        {element}
                    </th>
                );
            })}
        </tr>
      </thead>
      <tbody>
        {sorted.map((element) => {
          return (
            <tr>
              <td>{element.storeID}</td>
              <td>${element.salePrice}</td>
              <td>{toFixed(parseFloat(element.savings), 2)}%</td>
              <td>${element.normalPrice}</td>
              <td>
                <Button variant="primary">
                    <i className="bi bi-arrow-up-right-square"/>
                </Button>{" "}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
