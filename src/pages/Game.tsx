import {
    Navigate,
    useLocation,
    useNavigate,
    useSearchParams
} from "react-router-dom";
import {LocationState} from "../types";
import {Pages} from "./index";
import {useEffect} from "react";

const CLOSE_KEYS = [
    // Escape key
    "27",
    "Escape"
]

export function Game() {
    const [parameters, _] = useSearchParams();
    const location = useLocation()
    const navigation = useNavigate()
    const id = parameters.get("id")

    if (!id) {
        return <Navigate to={Pages.Home} replace={true}/>
    }

    const dismissHandler = ()=> {
        const state = location.state as LocationState | undefined
        state && state.backgroundLocation && navigation(state.backgroundLocation)
    }

    useEffect(()=>{
        const handler = (keyboardEvent:KeyboardEvent)=> {
            if (CLOSE_KEYS.includes(keyboardEvent.code)) {
                dismissHandler()
            }
        }
        window.addEventListener('keypress',handler)
        return () => window.removeEventListener('keypress',handler)
    },[])

    // const gameLookup = useCheapShark(gamesURL, { id: id })
    // const backgroundLocation = useLocation().state as LocationState | undefined

    let main;
        /*
    if (gameLookup.isLoading) {
        main =  <ExpensiveLoading/>
    } else if (gameLookup.data) {
        main =  <ExpensiveGame gameLookup={gameLookup.data}/>
    } else {
        main = <h1>ERROR I GUESS</h1>
    }
    */
    return <div onClick={dismissHandler} className={"position-absolute top-50 start-50 translate-middle w-100 h-100"}>
        <div className={"position-absolute top-50 start-50 translate-middle"}>
            <h1 className={"text-light"}>Something is in my ass</h1>
        </div>
    </div>
}
