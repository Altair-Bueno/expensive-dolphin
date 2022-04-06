import { Deal } from "../../cheapshark/games/gameLookup";
import { ListOfDeals } from "../../cheapshark/deals/listOfDeals";

export {
    Order,
    sortData
}

export enum OrderEnum {
    NONE,
    ASCENDING,
    DESCENDING
}

interface OrderProps {
    order:OrderEnum
}

function Order (props:OrderProps) {
    const all = props.order === OrderEnum.NONE;
    const up = all || props.order === OrderEnum.ASCENDING
    const down = all || props.order === OrderEnum.DESCENDING;
    const opacityZero = 'opacity-0'
    const opacityFull = 'opacity-100'

    return <div className={"text-light d-flex small"}>
        <div className={"col m-0 p-0"}>
            <div className={"row m-0 p-0"}>
                <i className = {`bi-caret-up-fill m-0 p-0 ${up ? opacityFull:opacityZero}`}/>
            </div>
            <div className={"row m-0 p-0"}>
                <i className = {`bi-caret-down-fill m-0 p-0 ${down ? opacityFull:opacityZero}`}/>
            </div>
        </div>
    </div>
}

function sortData(data: Deal[], ordered: {order: OrderEnum, rownum: number}){
        return data.sort((a, b) => {
                switch (ordered.rownum) {
                        case 1:
                                if (ordered.order === OrderEnum.ASCENDING) {
                                        return (
                                                parseFloat(a.price) -
                                                parseFloat(b.price)
                                        );
                                } else if (
                                        ordered.order === OrderEnum.DESCENDING
                                ) {
                                        return (
                                                parseFloat(b.price) -
                                                parseFloat(a.price)
                                        );
                                } else {
                                        return 0;
                                }

                        case 2:
                                if (ordered.order === OrderEnum.ASCENDING) {
                                        return (
                                                parseFloat(a.savings) -
                                                parseFloat(b.savings)
                                        );
                                } else if (
                                        ordered.order === OrderEnum.DESCENDING
                                ) {
                                        return (
                                                parseFloat(b.savings) -
                                                parseFloat(a.savings)
                                        );
                                } else {
                                        return 0;
                                }

                        case 3:
                                if (ordered.order === OrderEnum.ASCENDING) {
                                        return (
                                                parseFloat(a.retailPrice) -
                                                parseFloat(b.retailPrice)
                                        );
                                } else if (
                                        ordered.order === OrderEnum.DESCENDING
                                ) {
                                        return (
                                                parseFloat(b.retailPrice) -
                                                parseFloat(a.retailPrice)
                                        );
                                } else {
                                        return 0;
                                }

                        default:
                                return 0;
                }
        });
}