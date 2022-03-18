import {Order, OrderEnum} from "../components/game/Order";

export {
    Help
}

function Help() {
    return (
        <div className={"h-25 bg-dark d-flex"}>
            <div className={"row"}>
                <div className={"col"}>
                    <Order order={OrderEnum.NONE}/>
                </div>
                <div className={"col"}>
                    <Order order={OrderEnum.DESCENDING}/>
                </div>
                <div className={"col"}>
                    <Order order={OrderEnum.ASCENDING}/>
                </div>
                <div className={"col"}>
                    <Order order={OrderEnum.NONE}/>
                </div>
            </div>
        </div>
    );
}