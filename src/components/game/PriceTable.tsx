import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {Order, OrderEnum, sortData} from "./Order";
import {Store} from "../../cheapshark/stores/stores";
import {useState} from "react";
import "./PriceTable.css";
import {Deal} from "../../cheapshark/games/gameLookup";
import {imageURL} from "../../cheapshark/stores";

export { PriceTable };

const headers = ["Shop", "Current Price", "Deal", "Retail Price", "Link"];

export interface PriceTableProps {
  tablemodel: Deal[];
  storeModel: Store[];
}

function toFixed(value: number, precision: number) {
  var precision = precision || 0,
    power = Math.pow(10, precision),
    absValue = Math.abs(Math.round(value * power)),
    result = (value < 0 ? "-" : "") + String(Math.floor(absValue / power));

  if (precision > 0) {
    var fraction = String(absValue % power),
      padding = new Array(Math.max(precision - fraction.length, 0) + 1).join(
        "0"
      );
    result += "." + padding + fraction;
  }
  return result;
}

function getStore(id: string, stores: Store[]) {
  return stores.find((element) => element.storeID === id)!;
}


function PriceTable(props: PriceTableProps) {
  const [ordered, setOrdered] = useState({
    order: OrderEnum.ASCENDING,
    rownum: 1,
  });

  const orig = [...props.tablemodel];
  var copy = [...props.tablemodel];
  const origarrwos = Order({ order: OrderEnum.NONE });

  var sorted = sortData(copy, ordered);

  var final = ordered.order === OrderEnum.NONE ? [...orig] : [...sorted];

  return (
    <Table
      striped
      bordered
      hover
      variant="dark"
      className="table align-middle text-center"
    >
      <thead>
        <tr className="text-center">
          {headers.map((element, index) => {
            {
              var res;
              index === 0 || index === 4
                ? (res = (
                    <th key={index} className="align-middle text-center m-auto">
                      {element}
                    </th>
                  ))
                : (res = (
                    <th key={index} className="m-auto text-center">
                      <button
                        type="button"
                        className="btn text-light shadow-none"
                        onClick={() => {
                          setOrdered({
                            order:
                              ordered.rownum === index
                                ? (ordered.order + 1) % 3
                                : 1,
                            rownum: index,
                          });
                        }}
                      >
                        <div className="d-flex justify-content-center">
                          <div className="my-auto pe-3">{element}</div>
                          {index === ordered.rownum
                            ? Order(ordered)
                            : origarrwos}
                        </div>
                      </button>
                    </th>
                  ));

              return res;
            }
          })}
        </tr>
      </thead>
      <tbody>
        {final.map((element) => {
          return (
            <tr key={final.indexOf(element)}>
              <td>
                <img
                  className="logo"
                  src={
                      imageURL +
                      getStore(element.storeID, props.storeModel).images.banner
                  }
                  />
                <img
                  className="logo2"
                  src={
                    imageURL +
                    getStore(element.storeID, props.storeModel).images.logo
                  }
                />
              </td>
              <td>${element.price}</td>
              <td>{toFixed(parseFloat(element.savings), 2)}%</td>
              <td>${element.retailPrice}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => window.open(`${imageURL}${element.dealID}`,'_blank')}
                  bsPrefix="btn"
                  className={"btn-primary"}
                >
                  <div className={"d-none d-md-block"}>
                    Go to website <i className="bi bi-arrow-up-right-square" />
                  </div>
                  <i className="d-md-none bi bi-arrow-up-right-square" />
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
