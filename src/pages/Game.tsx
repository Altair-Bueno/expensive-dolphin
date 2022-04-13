import {useLocation, useSearchParams} from "react-router-dom";
import {LocationState} from "../types";
import {ExpensiveGame} from "../components/game/fullscreen/ExpensiveGame";
import {NotFound} from "./NotFound";
import {useCheapShark} from "../cheapshark";
import {gamesURL} from "../cheapshark/games";
import {ExpensiveLoading} from "../components/wrappers/ExpensiveLoading";

export function Game() {
    const [parameters, _] = useSearchParams();
    const id = parameters.get("id")

    if (!id) {
        return <NotFound/>
    }

    const gameLookup = useCheapShark(gamesURL, { id: id })
    const backgroundLocation = useLocation().state as LocationState | undefined

    if (gameLookup.isLoading) {
        return <ExpensiveLoading/>
    } else if (gameLookup.data) {
        return <ExpensiveGame gameLookup={gameLookup.data}/>
    }
    return <div>IDK man</div>
}