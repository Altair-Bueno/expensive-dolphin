export {
    Order
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

    return <div className={"text-light d-flex small"}>
        <div className={"col m-0 p-0"}>
            <div className={"row m-0 p-0"}>
                {up ? <i className = {"bi-caret-up-fill m-0 p-0"}/>:<div className={"p-2"}/>}
            </div>
            <div className={"row m-0 p-0"}>
                {down ? <i className = {"bi-caret-down-fill m-0 p-0"}/>:<div className={"p-2"}/>}
            </div>
        </div>
    </div>
}