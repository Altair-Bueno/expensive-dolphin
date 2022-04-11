import {useCheapShark} from "../cheapshark";
import {gamesURL} from "../cheapshark/games";
import {ExpensiveLoading} from "../components/ExpensiveLoading";
import {
    AlertProps,
    AlertType,
    ExpensiveAlert
} from "../components/ExpensiveAlert";
import {ChangeEvent, useState} from "react";
import {Form, FormControl, FormGroup,} from "react-bootstrap";
import {UseQueryResult} from "react-query";
import {ListOfDeals} from "../cheapshark/deals/listOfDeals";
import {DealListElement} from "../components/DealListElement";
import {ListOfDealsParam} from "../cheapshark/deals";

export {
    Search
}

interface FilterProps {
    updateTitle: (x:ChangeEvent<HTMLInputElement>) => void
}

function Filter(props:FilterProps) {
    const {updateTitle} = props
    return <Form>
        <FormGroup>
            <Form.Label>Title</Form.Label>
            <FormControl type={"search"} onChange={updateTitle}/>
        </FormGroup>
    </Form>
}

function Search() {
    const init: ListOfDealsParam = { title:"" }
    const [filter,setFilter] = useState(init)
    const gameList:UseQueryResult<ListOfDeals[],any> = useCheapShark(gamesURL, filter)

    const filterProps:FilterProps= {
        updateTitle: x => setFilter({...filter,title:x.target.value})
    }

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
        main = gameList.data.map(x=><DealListElement {...x}/>)
    }
    return <div className={"container"}>
        <div className={"row"}>
            <aside className={"col-lg-4 col-md-12"}>
                <Filter {...filterProps}/>
            </aside>
            <main className={"col-lg col-md-12"}>
                {main}
            </main>
        </div>
    </div>
}