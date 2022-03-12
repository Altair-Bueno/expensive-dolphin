import {useState} from "react";
import {Alert, Button} from "react-bootstrap";

export{
    AlertDismissible
}

interface alertProps {
    alertType:string
    title:string
    content:string
    buttonText:string
}

function AlertDismissible(props:alertProps) {
    const [show, setShow] = useState(true);

    return (
        <>
            <Alert show={show} variant={props.alertType}>
                <Alert.Heading>{props.title}</Alert.Heading>
                <p>
                    {props.content}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant={props.alertType}>
                        {props.buttonText}
                    </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    );
}

