import {Link, useLocation, useSearchParams} from "react-router-dom";
import {LocationState} from "../types";

export function Game() {
    const [parameters, _] = useSearchParams();
    const id = parameters.get("id")
    const location = useLocation()
    const oldLocation = location.state as LocationState | undefined
    return <div>
        <h1>Hello world {id}</h1>
        {
            oldLocation && oldLocation.backgroundLocation &&
            <Link to={oldLocation.backgroundLocation}>Go back</Link>
        }
    </div>
}