import {Modal, ModalBody} from "react-bootstrap";
import {Navigate, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {Pages} from "../../../pages";
import {LocationState} from "../../../types";

export function CreateAlert() {
    const [parameters, _] = useSearchParams();
    const location = useLocation()
    const navigation = useNavigate()
    const id = parameters.get("id")

    if (!id) {
        return <Navigate to={Pages.Home} replace={true}/>
    }

    document.title = "Expensive Dolphin - Game";

    const dismissHandler = ()=> {
        const state = location.state as LocationState | undefined
        state && state.backgroundLocation && navigation(state.backgroundLocation)
    }


    return <Modal show={true}
                  size={"sm"}
                  keyboard={true}
                  backdrop={true}
                  animation={true}
                  centered={true}
                  onHide={dismissHandler}
                  onRequestClose={dismissHandler}
                  style={{border: "#1c1f26"}}>
        <Modal.Header style={{background: "#1c1f26", backgroundColor: "#1c1f26", outline: "none", border: "#1c1f26", }} closeButton={true} closeVariant={'white'} accessKey={"esc"}/>
        <Modal.Body style={{background: "#2F343F"}}>

        </Modal.Body>
    </Modal>
}