import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./PriceTable.css";

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
        result = (value < 0 ? "-" : "") + String(Math.floor(absValue / power));

    if (precision > 0) {
        var fraction = String(absValue % power),
            padding = new Array(
                Math.max(precision - fraction.length, 0) + 1
            ).join("0");
        result += "." + padding + fraction;
    }
    return result;
}

function PriceTable(props: PriceTableProps) {
    enum order {
        normal,
        asc,
        desc,
    }

    const headers = ["Shop", "Current Price", "Deal", "Retail Price", "Link"];

    const [ordered, setOrdered] = useState({
        order: order.normal,
        rownum: 0,
    });

    var sorted = props.tablemodel.sort((a, b) => {
        switch (ordered.rownum) {
            case 0:
                if (ordered.order === order.asc) {
                    return parseInt(a.storeID) - parseInt(b.storeID);
                } else if (ordered.order === order.desc) {
                    return parseInt(b.storeID) - parseInt(a.storeID);
                } else {
                    return 0;
                }
            case 1:
                if (ordered.order === order.asc) {
                    console.log("SORT-ASC");
                    return parseFloat(a.salePrice) - parseFloat(b.salePrice);
                } else if (ordered.order === order.desc) {
                    console.log("SORT-DESC");
                    return parseFloat(b.salePrice) - parseFloat(a.salePrice);
                } else {
                    return 0;
                }

            case 2:
                if (ordered.order === order.asc) {
                    return parseFloat(a.savings) - parseFloat(b.savings);
                } else if (ordered.order === order.desc) {
                    return parseFloat(b.savings) - parseFloat(a.savings);
                } else {
                    return 0;
                }

            case 3:
                if (ordered.order === order.asc) {
                    return (
                        parseFloat(a.normalPrice) - parseFloat(b.normalPrice)
                    );
                } else if (ordered.order === order.desc) {
                    return (
                        parseFloat(b.normalPrice) - parseFloat(a.normalPrice)
                    );
                } else {
                    return 0;
                }

            default:
                return 0;
        }
    });

    var final = ordered.order === order.normal ? props.tablemodel : sorted;

    return (
        <Table striped bordered hover variant="dark" className="table">
            <thead>
                <tr>
                    {headers.map((element, index) => {
                        return (
                            <th
                                onClick={() => {
                                    setOrdered({
                                        order:
                                            ordered.rownum === index
                                                ? (ordered.order + 1) % 3
                                                : 1,
                                        rownum: index,
                                    });
                                    console.log(ordered.order);
                                }}
                            >
                                {element}
                            </th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {final.map((element) => {
                    return (
                        <tr>
                            <td>{element.storeID}</td>
                            <td>${element.salePrice}</td>
                            <td>{toFixed(parseFloat(element.savings), 2)}%</td>
                            <td>${element.normalPrice}</td>
                            <td>
                                <Button variant="primary">
                                    <i className="bi bi-arrow-up-right-square" />
                                </Button>{" "}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
