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