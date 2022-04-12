import {PriceTable, PriceTableProps} from "../components/game/PriceTable";
import {ExpensiveLoading} from "../components/ExpensiveLoading";
import {AlertType, ExpensiveAlert} from "../components/ExpensiveAlert";
import {LoadError} from "../components/LoadError";
import {useCheapShark} from "../cheapshark";
import {gamesURL} from "../cheapshark/games";
import {useContext} from "react";
import {StoresContext} from "../ExpensiveContext";

export { MyList };

function MyList() {
  // call to the hook
  const ofertas = useCheapShark(gamesURL,{id:612})
  const stores = useContext(StoresContext)

  const loading = ofertas.isLoading

  if (loading) {
    return <ExpensiveLoading />;
  } else if (ofertas.data) {
    const props:PriceTableProps = {
      storeModel: stores,
      tablemodel: ofertas.data.deals
    }
    return <>
      <h1>My List placeholder</h1>
      <div className="col-md-10 offset-md-1">
        <PriceTable {...props} />
      </div>
    </>
  } else {
    const alert = {
      alertType: AlertType.danger,
      title: "Loading error",
      content: "An unexpected error occured while loading the data. Reaload the website to try again.",
      buttonText: "Close",
    }
    return <>
      <LoadError/>
      <ExpensiveAlert {...alert}/>
    </>
  }
}
