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
    const sale = <div className={"col p-0 m-0 ms-0"}>
            <div className={"row p-0 m-0"}>
                <del className={"small text-start p-0 m-0"}>${props.retailPrice}</del>
            </div>
            <div className={"row-2 p-0 m-0 w-76"}>
                <span className={" rounded rounded-2 bg-danger small text-start p-1 mt-1 h-auto w-auto"} style={{color: "black"}}>
                    -{props.savings}%
                </span>
            </div>
        </div>
    const notSale = <div className={"col"}/>

    return (
        <div className={"container text-light m-0"}>
            <div className={"row p-0 m-0"}>
                <div className={"col p-0 text-start h4 my-auto"}>
                    ${props.price}
                </div>
                {props.isOnSale ? sale : notSale}
            </div>
        </div>
    )
}