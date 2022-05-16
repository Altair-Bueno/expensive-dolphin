import {
    Navigate,
    useLocation,
    useNavigate,
    useSearchParams
} from "react-router-dom";
import {LocationState} from "../types";
import {Pages} from "./index";
import {useCheapShark} from "../cheapshark";
import {gamesURL} from "../cheapshark/games";
import {ExpensiveGame} from "../components/game/fullscreen/ExpensiveGame";
import {ExpensiveLoading} from "../components/wrappers/ExpensiveLoading";
import {ExpensiveAlert} from "../components/wrappers/ExpensiveAlert";
import {Modal} from 'react-bootstrap'

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
    /*
    useEffect(()=>{
        const handler = (keyboardEvent:KeyboardEvent)=> {
            if (CLOSE_KEYS.includes(keyboardEvent.code)) {
                dismissHandler()
            }
        }
        window.addEventListener('keypress',handler)
        return () => window.removeEventListener('keypress',handler)
    },[])*/

    const gameLookup = useCheapShark(gamesURL, { id: id })
    // const backgroundLocation = useLocation().state as LocationState | undefined

    let main;
    if (gameLookup.isLoading) {
        main =  <ExpensiveLoading/>
    } else if (gameLookup.data) {
        main =  <ExpensiveGame gameLookup={gameLookup.data}/>
    } else if (gameLookup.error){
        main = <ExpensiveAlert {...gameLookup.error}/>
    }
    return <Modal show={true}
                  size={"lg"}
                  keyboard={true}
                  backdrop={true}
                  animation={false}
                  centered={true}
                  onHide={dismissHandler}
                  onRequestClose={dismissHandler}>
        <Modal.Header closeButton={true}/>
        <Modal.Body>{main}</Modal.Body>
    </Modal>
    /*
    return <div onClick={dismissHandler}
                className={"position-absolute top-50 start-50 translate-middle w-100 h-100 well"}>

    </div>
    */
}
