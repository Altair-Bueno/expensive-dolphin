import './Price.css'

export {
    Price
}

interface PriceProps {
    price: number,
    retailPrice: number,
    savings: number,
    isOnSale: any
}

function Price(props: PriceProps) {
    const sale = props.isOnSale ?(
        <div className={"col p-0 m-0"}>
            <div className={"row p-0 m-0"}>
                <del className={"small p-0 m-0"}>${props.retailPrice}</del>
            </div>
            <div className={"row p-0 m-0 w-76 "}>
                <span className={"rounded rounded-2 bg-danger small text-center p-0 m-0"} >
                    -{props.savings}%
                </span>
            </div>
        </div>) : <div className={"col"}/>


    return (
        <div className={"container price-root text-light m-0"}>
            <div className={"row p-0 m-0"}>
                <span className={"p-0 me-2 text-start price-tag "}>
                    ${props.price}
                </span>
                {sale}
            </div>
        </div>
    )
}