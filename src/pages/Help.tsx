import {Price} from "../components/game/Price";

export {
    Help
}

function Help() {
    return <div className={"h-25"}>
        <Price price={10} retailPrice={20} savings={50} isOnSale={true}/>
        <Price price={100} retailPrice={400} savings={75} isOnSale={true}/>
        <Price price={999} retailPrice={1} savings={75} isOnSale={true}/>
        <Price price={1} retailPrice={20} savings={98} isOnSale={true}/>
        <Price price={10} retailPrice={10} savings={0} isOnSale={false}/>
    </div>
}