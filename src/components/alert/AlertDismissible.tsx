import {useState} from "react";
import {Alert, Button} from "react-bootstrap";

export{
    AlertDismissible
}

export enum AlertType{
    primary = "primary",
    secondary = "secondary",
    success = "success",
    danger = "danger",
    warning = "warning",
    info = "info",
    light = "light",
    dark = "dark"
}

interface AlertProps {
    alertType: AlertType
    title:string
    content:string
    buttonText:string
}

function AlertDismissible(props:AlertProps) {
    const [show, setShow] = useState(true);

    return (
        <>
            <Alert show={show} variant={props.alertType.toString()}>
                <Alert.Heading>{props.title}</Alert.Heading>
                <p>
                    {props.content}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant={props.alertType.toString()}>
                        {props.buttonText}
                    </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    );
}

