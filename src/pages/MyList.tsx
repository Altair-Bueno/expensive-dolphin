import { PriceTable } from "../components/game/PriceTable";
import { ExpensiveLoading } from "../components/ExpensiveLoading";
import { AlertType, ExpensiveAlert } from "../components/ExpensiveAlert";
import { dealsBaseAPIURL, storesBaseAPIURL } from "../components/Query";
import { deals, stores } from "../cheapshark/exampledata";
import { Store } from "../cheapshark/stores"
import { LoadError } from "../components/LoadError";
import { ListOfDeals } from "../cheapshark/deals/listOfDeals";
import { useEffect, useState } from "react";

export { MyList };

// For the "unwrapping" variation

async function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<{ data: T }>;
    })
    .then((data) => {
      return data.data;
    });
}



function MyList() {
    const [data, setData] = useState({
        tiendas: {} as Store[],
        ofertas: {} as ListOfDeals[],
        error: false
    });

    useEffect(() => {
        const fetchData =  async () => {
            try{
                const [respTodoOne, respTodoTwo] = await Promise.all([
                    fetch(dealsBaseAPIURL),
                    fetch(storesBaseAPIURL)
                ]);
                
                const respT = await respTodoOne.json();
                const respD = await respTodoTwo.json();

                console.log(respT.json())
                console.log(respD.json())

                setData({
                    tiendas: respT as Store[],
                    ofertas: respD as ListOfDeals[],
                    error: false
                })
        
                
            } catch(err){
                setData({
                    tiendas: {} as Store[],
                    ofertas: {} as ListOfDeals[],
                    error: true
                })
            }
        }

    })

    if(data.error){
        return (
            <>
                    {LoadError()}
                    {ExpensiveAlert({
                            alertType: AlertType.danger,
                            title: "Loading error",
                            content: "An unexpected error occured while loading the data. Reaload the website to try again.",
                            buttonText: "Close",
                    })}
            </>
    );
    }

    return (
        <>
          <h1>My List placeholder</h1>
          <div className="col-md-10 offset-md-1">
            <PriceTable storeModel={data.tiendas} tablemodel={data.ofertas} />
          </div>
        </>
      );
  
}
