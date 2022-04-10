import {useCheapShark} from "../cheapshark";
import {gamesURL} from "../cheapshark/games";
import {ExpensiveLoading} from "../components/ExpensiveLoading";
import {
    AlertProps,
    AlertType,
    ExpensiveAlert
} from "../components/ExpensiveAlert";
import {useState} from "react";

export {
    Search
}
function Search() {
    const [query,setQuery] = useState({title:"elder"})
    const gameList = query ? useCheapShark(gamesURL, query) : null

    let main;
    if (!gameList) {
        main = "Placeholder"
    } else if (gameList.isLoading) {
        main = <ExpensiveLoading/>
    } else if (gameList.isError) {
        const props: AlertProps = {
            alertType: AlertType.danger,
            buttonText: "Error",
            content: "Foo",
            title: "Baz"
        }
        main = <ExpensiveAlert {...props}/>
    } else if (gameList.data) {
        main = gameList.data.map(x =><div>
            {JSON.stringify(x)}
        </div>)
    }
    return <div className={"container"}>
        <div className={"row"}>
            <aside className={"col-lg-4 col-md-12"}>
                {"placeholder"}
            </aside>
            <main className={"col-lg col-md-12"}>
                {main}
            </main>
        </div>
    </div>
}