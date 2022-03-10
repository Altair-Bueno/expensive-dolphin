export {
    Price
}

interface PriceProps {
    price:number,
    retailPrice:number
    savings:number,
    isOnSale:any
}

function Price(props:PriceProps) {
    if (props.isOnSale){
        return <div className={"bg-dark"}>
            <img src={"/"} alt={"Foo"}/>
            <h3>${props.price}</h3>
            <div className={"col"}>
                <del className={"col-1"}>
                    ${props.retailPrice}
                </del>
                <span className={"rounded rounded-2 bg-danger col-1"}>
                    -{props.savings.toPrecision(2)}
                </span>
            </div>
        </div>
    } else {
        return <div>
            <h3>${props.price}</h3>
        </div>
    }
}